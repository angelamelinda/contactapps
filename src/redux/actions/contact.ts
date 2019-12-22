import { URL_API, ERROR } from "../../constants";
import {
  IApiRequest,
  IContactDetail,
  IErrorValidation
} from "../../interfaces";
import { services } from "../../helpers/services";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../../interfaces/state";
import {
  TAllAction,
  IContactAction,
  E_CONTACT_ACTION
} from "../../interfaces/action";
import { setError, setLoading, setToast } from "./common";
import { History } from "history";
import { validate } from "../../helpers/validate";

export function setAllGetData(contacts: IContactDetail[]): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_SET_ALL_CONTACT,
    payload: { contacts }
  };
}

export function resetContact(): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_RESET,
    payload: {}
  };
}

export function setContact(contact: IContactDetail): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_SET_CONTACT,
    payload: { contact }
  };
}

export function setForm(key: string, value: number | string): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_SET_FORM,
    payload: { key, value }
  };
}

export function setErrorValidation(
  errorValidation: IErrorValidation
): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_SET_ERROR,
    payload: { errorValidation }
  };
}

export function validateContact(
  isNew: boolean,
  id: string,
  data: IContactDetail,
  history: History
): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    validation(data)
      .then(() => {
        const request: IApiRequest = {
          url: isNew
            ? URL_API.CREATE_CONTACT
            : URL_API.UPDATE_CONTACT.replace(":id", id),
          method: isNew ? "POST" : "PUT",
          data
        };
        services
          .api(request)
          .then(resp => {
            const message =
              resp && resp.error
                ? "Sorry, something went wrong!"
                : resp.message;

            dispatch(getAllContact());
            history.replace("/");

            dispatch(setToast(message));
            setTimeout(() => {
              dispatch(setToast(null));
            }, 5000);
          })
          .catch(_ => {
            console.log("hereeeeee");
            dispatch(setError({ message: ERROR.COMMON }));
          });
      })
      .catch(error => {
        dispatch(setErrorValidation(error));
      });
  };
}

export function deleteContact(
  id: string,
  history: History
): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    const request: IApiRequest = {
      url: URL_API.DELETE_CONTACT.replace(":id", id),
      method: "DELETE"
    };
    services
      .api(request)
      .then(resp => {
        if (resp && resp.data) {
          dispatch(getAllContact());
          history.replace("/");
        }

        if (resp && resp.error) {
          dispatch(setToast("Sorry, something went wrong!"));
          setTimeout(() => {
            dispatch(setToast(null));
          }, 5000);
        } else {
          throw new Error();
        }
      })
      .catch(_ => {
        dispatch(setError({ message: ERROR.COMMON }));
      });
  };
}

export function getContact(
  id: string
): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    dispatch(setLoading(true));
    const request: IApiRequest = {
      url: URL_API.GET_CONTACT.replace(":id", id),
      method: "GET"
    };
    services
      .api(request)
      .then(resp => {
        if (resp && resp.data) {
          dispatch(setContact(resp.data as IContactDetail));
        } else {
          throw new Error();
        }
      })
      .catch(_ => {
        dispatch(setError({ message: ERROR.COMMON }));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function getAllContact(): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    dispatch(setLoading(true));
    const request: IApiRequest = {
      url: URL_API.GET_ALL_CONTACT,
      method: "GET"
    };
    services
      .api(request)
      .then(resp => {
        if (resp && resp.data) {
          dispatch(setAllGetData(resp.data as IContactDetail[]));
        } else {
          throw new Error();
        }
      })
      .catch(_ => {
        dispatch(setError({ message: ERROR.COMMON }));
      })
      .finally(() => {
        dispatch(setLoading(true));
      });
  };
}

export const validation = (inputs: IContactDetail) => {
  return new Promise((resolve, reject) => {
    const error: IErrorValidation = {
      firstName: validate.emptyString(inputs.firstName),
      lastName: validate.emptyString(inputs.lastName),
      age: validate.minMaxNumber(1, 100, inputs.age),
      photo: validate.emptyStringAndUrl(inputs.photo)
    };

    Object.keys(error).forEach(key => {
      if (!(error as any)[key]) {
        delete (error as any)[key];
      }
    });

    if (Object.keys(error).length > 0) {
      reject(error);
    } else {
      resolve();
    }
  });
};
