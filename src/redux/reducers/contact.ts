import { IContactState } from "../../interfaces/state";
import {
  IContactAction,
  E_CONTACT_ACTION,
  IContactAddNewContact,
  IContactSetAllContact,
  IContactDeleteContact,
  IContactUpdateContact,
  IContactSetForm,
  IContactSetContact
} from "../../interfaces/action";

const INITIAL_STATE: IContactState = {
  contacts: null,
  contactForm: {
    id: "",
    firstName: "",
    lastName: "",
    age: 0,
    photo: "N/A"
  }
};

function contactReducer(
  state = INITIAL_STATE,
  action: IContactAction
): IContactState {
  switch (action.type) {
    case E_CONTACT_ACTION.CONTACT_SET_ALL_CONTACT:
      const { contacts } = action.payload as IContactSetAllContact;
      return { ...state, contacts };

    case E_CONTACT_ACTION.CONTACT_SET_CONTACT:
      const { contact } = action.payload as IContactSetContact;
      return { ...state, contactForm: contact };

    case E_CONTACT_ACTION.CONTACT_ADD_NEW_CONTACT:
      const { contact: newContact } = action.payload as IContactAddNewContact;

      if (state.contacts) {
        return { ...state, contacts: [...state.contacts, newContact] };
      }

      return { ...state, contacts: [newContact] };

    case E_CONTACT_ACTION.CONTACT_DELETE_CONTACT:
      const { id } = action.payload as IContactDeleteContact;
      if (state.contacts) {
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== id)
        };
      }
      return state;

    case E_CONTACT_ACTION.CONTACT_UPDATE_CONTACT:
      const {
        contact: updateContact
      } = action.payload as IContactUpdateContact;
      if (state.contacts) {
        const index = state.contacts.findIndex(
          contact => contact.id === updateContact.id
        );
        const updatedContacts = [...state.contacts];
        updatedContacts[index] = updateContact;
        return {
          ...state,
          contacts: updatedContacts
        };
      }
      return state;

    case E_CONTACT_ACTION.CONTACT_SET_FORM:
      const { key, value } = action.payload as IContactSetForm;
      return { ...state, contactForm: { ...state.contactForm, [key]: value } };
  }
  return state;
}

export default contactReducer;
