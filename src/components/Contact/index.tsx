import React, { FC } from "react";
import { IContactDetail } from "../../interfaces";
import {
  ContactWrapper,
  ContactPhoto,
  ContactName,
  ContactAction,
  ContactActionButton,
  ContactLeft,
  ContactRight
} from "./styled";
import { Link } from "react-router-dom";
import { helpers } from "../../helpers";

interface IContact {
  contact: IContactDetail;
}

const Contact: FC<IContact> = ({ contact }) => {
  const photo = helpers.isUrl(contact.photo) && (
    <img src={contact.photo} alt="" />
  );
  const fullName =
    contact.firstName !== ""
      ? contact.firstName + " " + contact.lastName
      : contact.lastName;
  const age = " | " + contact.age + " y.o";
  return (
    <ContactWrapper>
      <ContactLeft>
        <ContactPhoto>{photo}</ContactPhoto>
      </ContactLeft>
      <ContactRight>
        <ContactName>
          {fullName}
          {age}
        </ContactName>
        <ContactAction>
          <Link to={"contact/" + contact.id} className="text-decoration__none">
            <ContactActionButton>View</ContactActionButton>
          </Link>
        </ContactAction>
      </ContactRight>
    </ContactWrapper>
  );
};

export default Contact;
