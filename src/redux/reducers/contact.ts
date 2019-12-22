import { IContactState } from "../../interfaces/state";
import {
  IContactAction,
  E_CONTACT_ACTION,
  IContactSetAllContact,
  IContactSetForm,
  IContactSetContact,
  IContactSetError
} from "../../interfaces/action";

export const INITIAL_STATE: IContactState = {
  contacts: null,
  contactForm: {
    id: "",
    firstName: "",
    lastName: "",
    age: 1,
    photo: ""
  },
  errorValidation: null
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

    case E_CONTACT_ACTION.CONTACT_SET_FORM:
      const { key, value } = action.payload as IContactSetForm;
      return { ...state, contactForm: { ...state.contactForm, [key]: value } };

    case E_CONTACT_ACTION.CONTACT_SET_ERROR:
      const { errorValidation } = action.payload as IContactSetError;
      return { ...state, errorValidation };

    case E_CONTACT_ACTION.CONTACT_RESET:
      return { ...INITIAL_STATE };
  }
  return state;
}

export default contactReducer;
