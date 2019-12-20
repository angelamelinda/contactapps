export interface IContactDetail {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface IContact {
  contact: IContactDetail;
}

export interface IError {
  message: string;
}

export interface IApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
}
