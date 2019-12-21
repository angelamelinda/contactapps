import { IContactDetail, IError, IErrorValidation } from ".";

export interface IContactState {
  contacts: IContactDetail[] | null;
  contactForm: IContactDetail;
  errorValidation: IErrorValidation | null;
}

export interface IResponse {
  message: string;
  data?: IContactDetail[] | IContactDetail;
  error?: { message: string };
}

export interface ICommonState {
  isLoading: boolean;
  error: IError | null;
  toast: string | null;
}

export interface IAppState {
  contactReducer: IContactState;
  commonReducer: ICommonState;
}
