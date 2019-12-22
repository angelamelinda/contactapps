import contactReducer from "./contact";
import { E_CONTACT_ACTION } from "../../interfaces/action";

const INITIAL_STATE = {
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

const CONTACTS = [
  {
    id: "b3abd640-c92b-11e8-b02f-cbfa15db428b",
    firstName: "Luke",
    lastName: "Skywalker",
    age: 20,
    photo: "N/A"
  }
];

describe("contact reducer", () => {
  it("should return INITIAL_STATE when contact reset", () => {
    expect(
      contactReducer(INITIAL_STATE, {
        type: E_CONTACT_ACTION.CONTACT_RESET,
        payload: {}
      })
    ).toEqual(INITIAL_STATE);
  });

  it(`should return contacts with CONTACTS when contacts is ${CONTACTS}`, () => {
    expect(
      contactReducer(INITIAL_STATE, {
        type: E_CONTACT_ACTION.CONTACT_SET_ALL_CONTACT,
        payload: { contacts: CONTACTS }
      })
    ).toEqual({
      contacts: CONTACTS,
      contactForm: {
        id: "",
        firstName: "",
        lastName: "",
        age: 1,
        photo: ""
      },
      errorValidation: null
    });
  });

  it(`should return contacts is null when contacts is null`, () => {
    expect(
      contactReducer(INITIAL_STATE, {
        type: E_CONTACT_ACTION.CONTACT_SET_ALL_CONTACT,
        payload: { contacts: null }
      })
    ).toEqual({
      contacts: null,
      contactForm: {
        id: "",
        firstName: "",
        lastName: "",
        age: 1,
        photo: ""
      },
      errorValidation: null
    });
  });

  it(`should return errorValidation with error in the first name when it is required`, () => {
    expect(
      contactReducer(INITIAL_STATE, {
        type: E_CONTACT_ACTION.CONTACT_SET_ERROR,
        payload: {
          errorValidation: {
            firstName: "Required"
          }
        }
      })
    ).toEqual({
      contacts: null,
      contactForm: {
        id: "",
        firstName: "",
        lastName: "",
        age: 1,
        photo: ""
      },
      errorValidation: {
        firstName: "Required"
      }
    });
  });

  it(`should return errorValidation is null when errorValidation is null`, () => {
    expect(
      contactReducer(INITIAL_STATE, {
        type: E_CONTACT_ACTION.CONTACT_SET_ERROR,
        payload: {
          errorValidation: null
        }
      })
    ).toEqual({
      contacts: null,
      contactForm: {
        id: "",
        firstName: "",
        lastName: "",
        age: 1,
        photo: ""
      },
      errorValidation: null
    });
  });
});
