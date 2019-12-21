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
  HeaderAddContactAction
} from "../../styled/App";

interface IListContact {
  state: IAppState;
  getAllContact: () => void;
  resetContact: () => void;
}

class ListContact extends PureComponent<IListContact> {
  componentDidMount() {
    const { getAllContact, resetContact } = this.props;
    resetContact();
    getAllContact();
  }

  render() {
    const { error } = this.props.state.commonReducer;
    const { contacts } = this.props.state.contactReducer;

    if (contacts) {
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

    if (error) {
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
  resetContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContact);
