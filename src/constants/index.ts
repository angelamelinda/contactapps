const URL_API_DOMAIN = "https://simple-contact-crud.herokuapp.com";

const BASE_URL_API = {
  CONTACT: URL_API_DOMAIN + "/contact",
  CONTACT_WITH_ID: URL_API_DOMAIN + "/contact/:id"
};

export const URL_API = {
  GET_ALL_CONTACT: BASE_URL_API.CONTACT,
  GET_CONTACT: BASE_URL_API.CONTACT_WITH_ID,
  UPDATE_CONTACT: BASE_URL_API.CONTACT_WITH_ID,
  DELETE_CONTACT: BASE_URL_API.CONTACT_WITH_ID,
  CREATE_CONTACT: BASE_URL_API.CONTACT
};

export const COLOR = {
  WHITE: "FFF",
  BLACK: "000",
  PRIMARY: "03ABE9",
  GREY: "EFEFEF",
  GREEEN: "6bcc45"
};

export const ERROR = {
  NOT_FOUND: "404 Not Found",
  NO_INTERNET: "No Internet Connection!",
  COMMON: "Sorry, something went wrong!"
};
