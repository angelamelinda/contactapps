import React, { PureComponent } from "react";
import { IAppState } from "../../interfaces/state";
import { connect } from "react-redux";
import { getAllContact, resetContact } from "../../redux/actions/contact";
import Loading from "../../components/Loading";
import { LoadingWrapper } from "../../components/Loading/styled";
import Contact from "../../components/Contact";
import { Link } from "react-router-dom";
import {
  HeaderTitleWrapper,
  HeaderTitle,
  HeaderAddContactAction,
  ErrorPage
} from "../../styled/App";
import { setError, setConnectivity } from "../../redux/actions/common";
import { ERROR } from "../../constants";

interface IListContact {
  state: IAppState;
  getAllContact: () => void;
  resetContact: () => void;
  setError: (error: { message: string } | null) => void;
  setConnectivity: (isOnline: boolean) => void;
}

class ListContact extends PureComponent<IListContact> {
  componentDidMount() {
    const { getAllContact, resetContact, setConnectivity } = this.props;
    resetContact();
    getAllContact();

    window.addEventListener("online", () => setConnectivity(true));
    window.addEventListener("offline", () => setConnectivity(false));
  }

  componentDidUpdate(prevProps: IListContact) {
    const { getAllContact, state, setError, resetContact } = this.props;
    const { isOnline } = state.commonReducer;
    if (!prevProps.state.commonReducer.isOnline && isOnline) {
      setError(null);
      resetContact();
      getAllContact();
    } else if (prevProps.state.commonReducer.isOnline && !isOnline) {
      setError({ message: ERROR.NO_INTERNET });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("online", () => setConnectivity(true));
    window.removeEventListener("offline", () => setConnectivity(false));
  }

  render() {
    const { error } = this.props.state.commonReducer;
    const { contacts } = this.props.state.contactReducer;

    if (error && error.message !== "") {
      return <ErrorPage>{error.message}</ErrorPage>;
    }

    if (contacts) {
      console.log("hehehhe");
      return (
        <>
          <HeaderTitleWrapper>
            <HeaderTitle>All Contact</HeaderTitle>
            <Link to="/new" className="text-decoration__none">
              <HeaderAddContactAction>+</HeaderAddContactAction>
            </Link>
          </HeaderTitleWrapper>

          {contacts.map(contact => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </>
      );
    }

    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  getAllContact,
  resetContact,
  setError,
  setConnectivity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContact);
