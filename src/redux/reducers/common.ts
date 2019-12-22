import {
  E_COMMON_ACTION,
  ICommonAction,
  ICommonSetLoading,
  ICommonSetError,
  ICommonSetToast,
  ICommonSetConnectivity
} from "../../interfaces/action";
import { ICommonState } from "../../interfaces/state";

const INITIAL_STATE: ICommonState = {
  isLoading: false,
  error: null,
  toast: null,
  isOnline: true
};

function commonReducer(
  state = INITIAL_STATE,
  action: ICommonAction
): ICommonState {
  switch (action.type) {
    case E_COMMON_ACTION.COMMON_SET_LOADING:
      const { isLoading } = action.payload as ICommonSetLoading;
      return { ...state, isLoading };
    case E_COMMON_ACTION.COMMON_SET_ERROR:
      const { error } = action.payload as ICommonSetError;
      return { ...state, error };
    case E_COMMON_ACTION.COMMON_SET_TOAST:
      const { message: toastMessage } = action.payload as ICommonSetToast;
      return { ...state, toast: toastMessage };
    case E_COMMON_ACTION.COMMON_SET_CONNECTIVITY:
      const { isOnline } = action.payload as ICommonSetConnectivity;
      return { ...state, isOnline };
  }
  return state;
}

export default commonReducer;
