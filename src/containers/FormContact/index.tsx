import React, { PureComponent, ChangeEvent } from "react";
import { IContactDetail } from "../../interfaces";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/state";
import {
  HeaderTitleWrapper,
  HeaderTitle,
  Row,
  Col,
  HeaderBackButton,
  ErrorPage
} from "../../styled/App";
import {
  FormContactSaveButton,
  FormContactDeleteButton,
  Form,
  FormField,
  FormImage
} from "./styled";
import {
  getContact,
  setForm,
  deleteContact,
  validateContact,
  setContact,
  resetContact
} from "../../redux/actions/contact";
import { History } from "history";
import { LoadingWrapper } from "../../components/Loading/styled";
import Loading from "../../components/Loading";
import InputWithValidation from "../../components/InputWithValidation";
import { helpers } from "../../helpers";
import BackButton from "../../components/BackButton";
import { COLOR, ERROR } from "../../constants";
import { setError, setConnectivity } from "../../redux/actions/common";

interface IFormContactRoute {
  id: string;
}
interface IFormContact extends RouteComponentProps<IFormContactRoute> {
  formContact: IContactDetail;
  state: IAppState;
  getContact: (id: string) => void;
  setForm: (key: string, value: string | number) => void;
  deleteContact: (id: string, history: History) => void;
  validateContact: (
    isNew: boolean,
    id: string,
    data: IContactDetail,
    history: History
  ) => void;
  setContact: (contact: IContactDetail) => void;
  resetContact: () => void;
  setError: (error: { message: string } | null) => void;
  setConnectivity: (isOnline: boolean) => void;
}

class FormContact extends PureComponent<IFormContact> {
  private contactId: string;
  private isNew: boolean;

  constructor(props: IFormContact) {
    super(props);
    this.contactId = props.match.params.id;
    this.isNew = this.isNewContact();
  }

  componentDidMount() {
    const { resetContact } = this.props;
    resetContact();

    if (!this.isNew) {
      const { getContact } = this.props;
      getContact(this.contactId);
    }

    window.addEventListener("online", () => setConnectivity(true));
    window.addEventListener("offline", () => setConnectivity(false));
  }

  componentDidUpdate(prevProps: IFormContact) {
    const { getContact, state, setError, resetContact } = this.props;
    const { isOnline } = state.commonReducer;
    if (!prevProps.state.commonReducer.isOnline && isOnline) {
      setError(null);
      resetContact();
      getContact(this.contactId);
    } else if (prevProps.state.commonReducer.isOnline && !isOnline) {
      setError({ message: ERROR.NO_INTERNET });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("online", () => setConnectivity(true));
    window.removeEventListener("offline", () => setConnectivity(false));
  }

  isNewContact = () => {
    const { location } = this.props;
    return location.pathname.endsWith("/new");
  };

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { setForm } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    setForm(name, value);
  };

  handleDelete = () => {
    const { deleteContact, history } = this.props;
    deleteContact(this.contactId, history);
  };

  handleOnline = () => {
    const { setError, getContact } = this.props;
    if (!navigator.onLine) {
      setError({ message: ERROR.NO_INTERNET });
    } else {
      getContact(this.contactId);
      setError(null);
    }
  };

  handleSave = () => {
    const { state, validateContact, history } = this.props;
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

    validateContact(this.isNew, this.contactId, data, history);
  };

  renderButton = () => {
    if (this.isNew) {
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
          <FormContactSaveButton onClick={this.handleSave}>
            Save
          </FormContactSaveButton>
        </Col>
      </Row>
    );
  };

  renderForm = () => {
    const { errorValidation, contactForm } = this.props.state.contactReducer;
    const { firstName, lastName, age, photo } = contactForm;

    return (
      <Form data-testid="contact__form">
        <FormImage>
          {helpers.isUrl(photo) && <img src={photo} alt="" />}
        </FormImage>
        <FormField>
          <InputWithValidation
            label="First Name"
            type="text"
            value={firstName}
            name="firstName"
            change={this.handleChange}
            error={errorValidation ? errorValidation.firstName : ""}
          />
        </FormField>
        <FormField>
          <InputWithValidation
            label="Last Name"
            type="text"
            value={lastName}
            name="lastName"
            change={this.handleChange}
            error={errorValidation ? errorValidation.lastName : ""}
          />
        </FormField>
        <FormField>
          <InputWithValidation
            label="Age"
            type="text"
            value={age}
            name="age"
            change={this.handleChange}
            error={errorValidation ? errorValidation.age : ""}
          />
        </FormField>
        <FormField>
          <InputWithValidation
            label="Photo"
            type="text"
            value={photo}
            name="photo"
            change={this.handleChange}
            error={errorValidation ? errorValidation.photo : ""}
          />
        </FormField>
      </Form>
    );
  };

  render() {
    const { isLoading, error } = this.props.state.commonReducer;
    if (error) {
      return <ErrorPage id="error-page">{error.message}</ErrorPage>;
    }

    if (this.isNew || !isLoading) {
      return (
        <>
          <HeaderTitleWrapper>
            <HeaderTitle>
              <HeaderBackButton onClick={this.handleBack}>
                <BackButton color={COLOR.PRIMARY} width={"20"} height={"20"} />
              </HeaderBackButton>
              Form Contact
            </HeaderTitle>
          </HeaderTitleWrapper>
          {this.renderForm()}
          {this.renderButton()}
        </>
      );
    }

    return (
      <LoadingWrapper data-testid="loading__container">
        <Loading />
      </LoadingWrapper>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  getContact,
  setForm,
  deleteContact,
  validateContact,
  setContact,
  resetContact,
  setError,
  setConnectivity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FormContact));
