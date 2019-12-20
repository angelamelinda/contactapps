import { Action } from "redux";
import { IContact, IContactDetail } from ".";

export enum E_CONTACT_ACTION {
  CONTACT_SET_ALL_CONTACT = "CONTACT_SET_ALL_CONTACT",
  CONTACT_ADD_NEW_CONTACT = "CONTACT_ADD_NEW_CONTACT",
  CONTACT_UPDATE_CONTACT = "CONTACT_UPDATE_CONTACT",
  CONTACT_DELETE_CONTACT = "CONTACT_DELETE_CONTACT",
  CONTACT_SET_FORM = "CONTACT_SET_FORM"
}

export interface IContactSetAllContact {
  contacts: IContactDetail[];
}

export interface IContactAddNewContact extends IContact {}

export interface IContactUpdateContact extends IContact {
  index: number;
}

export interface IContactDeleteContact {
  id: string;
}

export interface IContactSetForm {
  key: string;
  value: number | string;
}

export type TContactAction =
  | IContactSetAllContact
  | IContactAddNewContact
  | IContactUpdateContact
  | IContactDeleteContact
  | IContactSetForm;

export interface IContactAction extends Action<E_CONTACT_ACTION> {
  payload: TContactAction;
}

export enum E_COMMON_ACTION {
  COMMON_SET_LOADING = "COMMON_SET_LOADING",
  COMMON_SET_ERROR = "COMMON_SET_ERROR"
}

export interface ICommonSetLoading {
  isLoading: boolean;
}

export interface ICommonSetError {
  message: string;
}

export type TCommonAction = ICommonSetLoading | ICommonSetError;

export interface ICommonAction extends Action<E_COMMON_ACTION> {
  payload: TCommonAction;
}

export type TAllAction = ICommonAction | IContactAction;
