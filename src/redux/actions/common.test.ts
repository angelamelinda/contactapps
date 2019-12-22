import * as common from "./common";
import { E_COMMON_ACTION } from "../../interfaces/action";
import { ERROR } from "../../constants";

describe("common actions", () => {
  it("should return as expected when setLoading, the isLoading is true", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_LOADING,
      payload: { isLoading: true }
    };
    expect(common.setLoading(true)).toEqual(expectedResult);
  });

  it("should return as expected when setLoading, the isLoading is false", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_LOADING,
      payload: { isLoading: false }
    };
    expect(common.setLoading(false)).toEqual(expectedResult);
  });

  it("should return as expected when setConnectivity, the isOnline is false", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_CONNECTIVITY,
      payload: { isOnline: false }
    };
    expect(common.setConnectivity(false)).toEqual(expectedResult);
  });

  it("should return as expected when setConnectivity, the isOnline is true", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_CONNECTIVITY,
      payload: { isOnline: true }
    };
    expect(common.setConnectivity(true)).toEqual(expectedResult);
  });

  it("should return as expected when setError, the error is null", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_ERROR,
      payload: { error: null }
    };
    expect(common.setError(null)).toEqual(expectedResult);
  });

  it("should return as expected when setError, the message is Required", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_ERROR,
      payload: { error: { message: "Required" } }
    };
    expect(common.setError({ message: "Required" })).toEqual(expectedResult);
  });

  it(`should return as expected when setToast, the message is ${ERROR.COMMON}`, () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_TOAST,
      payload: { message: ERROR.COMMON }
    };
    expect(common.setToast(ERROR.COMMON)).toEqual(expectedResult);
  });

  it(`should return as expected when setToast, the message is null`, () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_TOAST,
      payload: { message: null }
    };
    expect(common.setToast(null)).toEqual(expectedResult);
  });
});
