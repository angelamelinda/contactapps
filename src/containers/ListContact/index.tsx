import React, { PureComponent } from "react";
import { IAppState } from "../../interfaces/state";
import { connect } from "react-redux";
import { getAllContact } from "../../redux/actions/contact";
import Loading from "../../components/Loading";
import { LoadingWrapper } from "../../components/Loading/styled";

interface IListContact {
  state: IAppState;
  getAllContact: () => void;
}

class ListContact extends PureComponent<IListContact> {
  componentDidMount() {
    const { getAllContact } = this.props;
    getAllContact();
  }

  render() {
    const { error } = this.props.state.commonReducer;
    const { contacts } = this.props.state.contactReducer;

    if (contacts) {
      return contacts.map(contact => {
        return contact.firstName;
      });
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
  getAllContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContact);
