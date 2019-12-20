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

export function setAllGetData(contacts: IContactDetail[]): IContactAction {
  return {
    type: E_CONTACT_ACTION.CONTACT_SET_ALL_CONTACT,
    payload: { contacts }
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
          console.log("hehe", resp.data);
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
