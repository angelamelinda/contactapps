import {
  E_COMMON_ACTION,
  ICommonAction,
  ICommonSetLoading,
  ICommonSetError
} from "../../interfaces/action";
import { ICommonState } from "../../interfaces/state";

const INITIAL_STATE: ICommonState = {
  isLoading: false,
  error: null
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
      const { message } = action.payload as ICommonSetError;
      return { ...state, error: { message } };
  }
  return state;
}

export default commonReducer;
