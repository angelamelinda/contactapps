import { ICommonAction, E_COMMON_ACTION } from "../../interfaces/action";

export function setLoading(isLoading: boolean): ICommonAction {
  return {
    type: E_COMMON_ACTION.COMMON_SET_LOADING,
    payload: { isLoading }
  };
}

export function setError(message: string): ICommonAction {
  return {
    type: E_COMMON_ACTION.COMMON_SET_ERROR,
    payload: { message }
  };
}
