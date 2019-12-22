import commonReducer from "./common";
import { E_COMMON_ACTION } from "../../interfaces/action";
import { ERROR } from "../../constants";

describe("common reducer", () => {
  it("should return state with isLoading true if the payload isLoading is true", () => {
    expect(
      commonReducer(
        { error: null, isLoading: false, isOnline: true, toast: null },
        {
          type: E_COMMON_ACTION.COMMON_SET_LOADING,
          payload: { isLoading: true }
        }
      )
    ).toEqual({ error: null, isLoading: true, isOnline: true, toast: null });
  });

  it("should return state with isLoading false if the payload isLoading is false", () => {
    expect(
      commonReducer(
        { error: null, isLoading: true, isOnline: true, toast: null },
        {
          type: E_COMMON_ACTION.COMMON_SET_LOADING,
          payload: { isLoading: false }
        }
      )
    ).toEqual({ error: null, isLoading: false, isOnline: true, toast: null });
  });

  it("should return state with isOnline false if the payload isOnline is false", () => {
    expect(
      commonReducer(
        { error: null, isLoading: false, isOnline: true, toast: null },
        {
          type: E_COMMON_ACTION.COMMON_SET_CONNECTIVITY,
          payload: { isOnline: false }
        }
      )
    ).toEqual({ error: null, isLoading: false, isOnline: false, toast: null });
  });

  it("should return state with isOnline true if the payload isOnline is true", () => {
    expect(
      commonReducer(
        { error: null, isLoading: false, isOnline: false, toast: null },
        {
          type: E_COMMON_ACTION.COMMON_SET_CONNECTIVITY,
          payload: { isOnline: true }
        }
      )
    ).toEqual({ error: null, isLoading: false, isOnline: true, toast: null });
  });

  it(`should return state with error message ${ERROR.NOT_FOUND} if the payload error message ${ERROR.NOT_FOUND}`, () => {
    expect(
      commonReducer(
        { error: null, isLoading: false, isOnline: true, toast: null },
        {
          type: E_COMMON_ACTION.COMMON_SET_ERROR,
          payload: { error: { message: ERROR.NOT_FOUND } }
        }
      )
    ).toEqual({
      error: { message: ERROR.NOT_FOUND },
      isLoading: false,
      isOnline: true,
      toast: null
    });
  });

  it("should return state with error null if the payload error null", () => {
    expect(
      commonReducer(
        {
          error: { message: ERROR.NOT_FOUND },
          isLoading: false,
          isOnline: false,
          toast: null
        },
        {
          type: E_COMMON_ACTION.COMMON_SET_ERROR,
          payload: { error: null }
        }
      )
    ).toEqual({ error: null, isLoading: false, isOnline: false, toast: null });
  });

  it(`should return state with toast message ${ERROR.COMMON} if the payload toast message ${ERROR.COMMON}`, () => {
    expect(
      commonReducer(
        { error: null, isLoading: false, isOnline: true, toast: null },
        {
          type: E_COMMON_ACTION.COMMON_SET_TOAST,
          payload: { message: ERROR.COMMON }
        }
      )
    ).toEqual({
      error: null,
      isLoading: false,
      isOnline: true,
      toast: ERROR.COMMON
    });
  });

  it("should return state with toast null if the payload toast null", () => {
    expect(
      commonReducer(
        {
          error: null,
          isLoading: false,
          isOnline: false,
          toast: ERROR.COMMON
        },
        {
          type: E_COMMON_ACTION.COMMON_SET_TOAST,
          payload: { message: null }
        }
      )
    ).toEqual({ error: null, isLoading: false, isOnline: false, toast: null });
  });
});
