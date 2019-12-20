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

interface IContact {
  contact: IContactDetail;
}

const Contact: FC<IContact> = ({ contact }) => {
  const photo = contact.photo !== "N/A" && <img src={contact.photo} alt="" />;
  const fullName =
    contact.firstName !== ""
      ? contact.firstName + " " + contact.lastName
      : contact.lastName;
  return (
    <ContactWrapper>
      <ContactLeft>
        <ContactPhoto>{photo}</ContactPhoto>
      </ContactLeft>
      <ContactRight>
        <ContactName>{fullName}</ContactName>
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
