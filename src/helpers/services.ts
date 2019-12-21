import axios from "axios";
import { IApiRequest } from "../interfaces";
import { IResponse } from "../interfaces/state";

export const services = {
  async api(request: IApiRequest): Promise<IResponse> {
    return axios(request)
      .then(response => {
        if (response && response.data) {
          return response.data;
        }
        throw new Error("Invalid Response");
      })
      .catch(error => {
        if (error && error.response) {
          return { error: error.response };
        }
        throw new Error("Invalid Response");
      });
  }
};
