import React, { PureComponent } from "react";
import { IContactDetail } from "../../interfaces";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/state";
import { HeaderTitleWrapper, HeaderTitle, Row, Col } from "../../styled/App";
import { FormContactSaveButton, FormContactDeleteButton } from "./styled";

interface IFormContactRoute {
  id: string;
}
interface IFormContact extends RouteComponentProps<IFormContactRoute> {
  formContact: IContactDetail;
  state: IAppState;
}

class FormContact extends PureComponent<IFormContact> {
  private contactId: string;

  constructor(props: IFormContact) {
    super(props);
    this.contactId = props.match.params.id;
  }

  componentDidMount() {}

  isNewCampaign = () => {
    const { location } = this.props;
    return location.pathname.endsWith("/new");
  };

  renderButton = () => {
    if (this.isNewCampaign()) {
      return (
        <Row>
          <Col>
            <FormContactSaveButton>Save</FormContactSaveButton>
          </Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col>
          <FormContactDeleteButton>Delete</FormContactDeleteButton>
        </Col>
        <Col>
          <FormContactSaveButton>Save</FormContactSaveButton>
        </Col>
      </Row>
    );
  };

  renderForm = () => {
    const { firstName, lastName } = this.props.state.contactReducer.contactForm;
    return (
      <Row>
        <Col>
          <input
            type="text"
            className="w-100"
            placeholder="First Name"
            value={firstName}
          />
        </Col>
        <Col>
          <input
            type="text"
            className="w-100"
            placeholder="Last Name"
            value={lastName}
          />
        </Col>
        <div className="w-100"></div>
      </Row>
    );
  };

  render() {
    console.log("hehe");
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FormContact));
