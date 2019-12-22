import { ICommonAction, E_COMMON_ACTION } from "../../interfaces/action";

export function setLoading(isLoading: boolean): ICommonAction {
  return {
    type: E_COMMON_ACTION.COMMON_SET_LOADING,
    payload: { isLoading }
  };
}

export function setToast(message: string | null): ICommonAction {
  return {
    type: E_COMMON_ACTION.COMMON_SET_TOAST,
    payload: { message }
  };
}

export function setError(error: { message: string } | null): ICommonAction {
  return {
    type: E_COMMON_ACTION.COMMON_SET_ERROR,
    payload: { error }
  };
}

export function setConnectivity(isOnline: boolean) {
  return {
    type: E_COMMON_ACTION.COMMON_SET_CONNECTIVITY,
    payload: { isOnline }
  };
}
