import { IContactDetail, IError, IErrorValidation } from ".";

export interface IContactState {
  contacts: IContactDetail[] | null;
  contactForm: IContactDetail;
  errorValidation: IErrorValidation | null;
}

export interface IResponse {
  message: string;
  data?: IContactDetail[] | IContactDetail;
}

export interface ICommonState {
  isLoading: boolean;
  error: IError | null;
}

export interface IAppState {
  contactReducer: IContactState;
  commonReducer: ICommonState;
}
