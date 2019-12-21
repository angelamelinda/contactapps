import { URL_API, DEFAULT_ERROR } from "../../constants";
import { IApiRequest, IContactDetail } from "../../interfaces";
import { services } from "../../helpers/services";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../../interfaces/state";
import {
  TAllAction,
  IContactAction,
  E_CONTACT_ACTION
} from "../../interfaces/action";
import { setError, setLoading } from "./common";
import { History } from "history";

export function setAllGetData(contacts: IContactDetail[]): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_SET_ALL_CONTACT,
    payload: { contacts }
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

export function createContact(
  data: IContactDetail,
  history: History
): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    const request: IApiRequest = {
      url: URL_API.CREATE_CONTACT,
      method: "POST",
      data
    };

    services
      .api(request)
      .then(_ => {
        dispatch(getAllContact());
        history.replace("/");
      })
      .catch(_ => {
        dispatch(setError(DEFAULT_ERROR));
      });
  };
}

export function deleteContact(
  id: string
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
        }
        throw new Error();
      })
      .catch(_ => {
        dispatch(setError(DEFAULT_ERROR));
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
        }
        throw new Error();
      })
      .catch(_ => {
        dispatch(setError(DEFAULT_ERROR));
      })
      .finally(() => {
        dispatch(setLoading(true));
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
        }
        throw new Error();
      })
      .catch(_ => {
        dispatch(setError(DEFAULT_ERROR));
      })
      .finally(() => {
        dispatch(setLoading(true));
      });
  };
}
