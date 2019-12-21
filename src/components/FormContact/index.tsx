import React, { PureComponent, ChangeEvent } from "react";
import { IContactDetail } from "../../interfaces";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/state";
import { HeaderTitleWrapper, HeaderTitle, Row, Col } from "../../styled/App";
import { FormContactSaveButton, FormContactDeleteButton } from "./styled";
import {
  getContact,
  setForm,
  deleteContact,
  createContact
} from "../../redux/actions/contact";
import { History } from "history";

interface IFormContactRoute {
  id: string;
}
interface IFormContact extends RouteComponentProps<IFormContactRoute> {
  formContact: IContactDetail;
  state: IAppState;
  getContact: (id: string) => void;
  setForm: (key: string, value: string | number) => void;
  deleteContact: (id: string) => void;
  createContact: (data: IContactDetail, history: History) => void;
}

class FormContact extends PureComponent<IFormContact> {
  private contactId: string;

  constructor(props: IFormContact) {
    super(props);
    this.contactId = props.match.params.id;
  }

  componentDidMount() {
    if (!this.isNewCampaign()) {
      const { getContact } = this.props;
      getContact(this.contactId);
    }
  }

  isNewCampaign = () => {
    const { location } = this.props;
    return location.pathname.endsWith("/new");
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { setForm } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    setForm(name, value);
  };

  handleDelete = () => {
    const { deleteContact } = this.props;
    deleteContact(this.contactId);
  };

  handleSave = () => {
    const { state, createContact, history } = this.props;
    const {
      firstName,
      lastName,
      age,
      photo
    } = state.contactReducer.contactForm;
    const data: IContactDetail = {
      firstName,
      lastName,
      age,
      photo
    };
    if (this.isNewCampaign()) {
      createContact(data, history);
    }
  };

  renderButton = () => {
    if (this.isNewCampaign()) {
      return (
        <Row>
          <Col>
            <FormContactSaveButton onClick={this.handleSave}>
              Save
            </FormContactSaveButton>
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col>
          <FormContactDeleteButton onClick={this.handleDelete}>
            Delete
          </FormContactDeleteButton>
        </Col>
        <Col>
          <FormContactSaveButton>Save</FormContactSaveButton>
        </Col>
      </Row>
    );
  };

  renderForm = () => {
    const {
      firstName,
      lastName,
      age,
      photo
    } = this.props.state.contactReducer.contactForm;
    return (
      <Row>
        <Col>
          <input
            type="text"
            className="w-100"
            placeholder="First Name"
            value={firstName}
            name="firstName"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <input
            type="text"
            className="w-100"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </Col>
        <div className="w-100"></div>
        <Col>
          <input
            type="number"
            className="w-100"
            placeholder="Age"
            value={age}
            name="age"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <input
            type="text"
            className="w-100"
            name="photo"
            placeholder="Photo"
            value={photo}
            onChange={this.handleChange}
          />
        </Col>
        <div className="w-100"></div>
      </Row>
    );
  };

  render() {
    return (
      <>
        <HeaderTitleWrapper>
          <HeaderTitle>Form Contact</HeaderTitle>
        </HeaderTitleWrapper>
        {this.renderForm()}
        {this.renderButton()}
      </>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  getContact,
  setForm,
  deleteContact,
  createContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FormContact));
