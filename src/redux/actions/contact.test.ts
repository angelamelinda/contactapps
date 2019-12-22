import * as contact from "./contact";
import { E_CONTACT_ACTION } from "../../interfaces/action";

const CONTACTS = [
  {
    id: "b3abd640-c92b-11e8-b02f-cbfa15db428b",
    firstName: "Luke",
    lastName: "Skywalker",
    age: 20,
    photo: "N/A"
  }
];

describe("contact actions", () => {
  it(`should return as expected when setAllGetData, the contacts is ${CONTACTS}`, () => {
    const expectedResult = {
      type: E_CONTACT_ACTION.CONTACT_RESET,
      payload: {}
    };
    expect(contact.resetContact()).toEqual(expectedResult);
  });

  it(`should return as expected when resetContact`, () => {
    const expectedResult = {
      type: E_CONTACT_ACTION.CONTACT_RESET,
      payload: {}
    };
    expect(contact.resetContact()).toEqual(expectedResult);
  });

  it(`should return as expected when setContact, the contact is ${CONTACTS[0]}`, () => {
    const expectedResult = {
      type: E_CONTACT_ACTION.CONTACT_SET_CONTACT,
      payload: { contact: CONTACTS[0] }
    };
    expect(contact.setContact(CONTACTS[0])).toEqual(expectedResult);
  });

  it(`should return as expected when setForm, the key is firstName and the value is Alan`, () => {
    const expectedResult = {
      type: E_CONTACT_ACTION.CONTACT_SET_FORM,
      payload: { key: "firstName", value: "Alan" }
    };
    expect(contact.setForm("firstName", "Alan")).toEqual(expectedResult);
  });

  it(`should return as expected when setErrorValidation`, () => {
    const expectedResult = {
      type: E_CONTACT_ACTION.CONTACT_SET_ERROR,
      payload: {
        errorValidation: {
          firstName: "Required",
          lastName: "",
          age: "Minimum 1",
          photo: "Invalid Url"
        }
      }
    };
    expect(
      contact.setErrorValidation({
        firstName: "Required",
        lastName: "",
        age: "Minimum 1",
        photo: "Invalid Url"
      })
    ).toEqual(expectedResult);
  });
});
