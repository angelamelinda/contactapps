import { Action } from "redux";
import { IContactDetail, IErrorValidation } from ".";

export enum E_CONTACT_ACTION {
  CONTACT_SET_CONTACT = "CONTACT_SET_CONTACT",
  CONTACT_SET_ALL_CONTACT = "CONTACT_SET_ALL_CONTACT",
  CONTACT_SET_FORM = "CONTACT_SET_FORM",
  CONTACT_SET_ERROR = "CONTACT_SET_ERROR",
  CONTACT_RESET = "CONTACT_RESET"
}

export interface IContactSetError {
  errorValidation: IErrorValidation;
}

export interface IContactSetContact {
  contact: IContactDetail;
}

export interface IContactSetAllContact {
  contacts: IContactDetail[];
}

export interface IContactSetForm {
  key: string;
  value: number | string;
}

export type TContactAction =
  | IContactSetError
  | IContactSetContact
  | IContactSetAllContact
  | IContactSetForm
  | IResetContact;

export interface IContactAction extends Action<E_CONTACT_ACTION> {
  payload: TContactAction;
}

export enum E_COMMON_ACTION {
  COMMON_SET_LOADING = "COMMON_SET_LOADING",
  COMMON_SET_ERROR = "COMMON_SET_ERROR",
  COMMON_SET_TOAST = "COMMON_SET_TOAST"
}

export interface IResetContact {}

export interface ICommonSetLoading {
  isLoading: boolean;
}

export interface ICommonSetError {
  message: string;
}

export interface ICommonSetToast {
  message: string | null;
}

export type TCommonAction =
  | ICommonSetLoading
  | ICommonSetError
  | ICommonSetToast;

export interface ICommonAction extends Action<E_COMMON_ACTION> {
  payload: TCommonAction;
}

export type TAllAction = ICommonAction | IContactAction;
