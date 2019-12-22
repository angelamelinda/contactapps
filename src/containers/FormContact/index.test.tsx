import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RootReducer from "../../redux/reducers";
import FormContact from ".";

function renderWithRedux(
  ui: JSX.Element,
  {
    initialState = {},
    store = createStore(RootReducer, applyMiddleware(thunkMiddleware))
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("render loading first when access Form Contact", async () => {
  const { getByTestId } = renderWithRedux(<FormContact />);

  expect(getByTestId("loading__container")).toBeInTheDocument();
});
