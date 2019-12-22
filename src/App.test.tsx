import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import RootReducer from "./redux/reducers";
import { Router, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import { ERROR } from "./constants";

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

test("renders list contact page", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);

  const { getByTestId } = renderWithRedux(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("loading__container")).toBeInTheDocument();
});

test("renders add contact page", () => {
  const history = createMemoryHistory();
  const route = "/new";
  history.push(route);

  const { getByTestId } = renderWithRedux(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("contact__form")).toBeInTheDocument();
});

test("renders add contact page", () => {
  const history = createMemoryHistory();
  const route = "/contact/1212";
  history.push(route);

  const { getByTestId } = renderWithRedux(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("loading__container")).toBeInTheDocument();
});

test("renders 404", () => {
  const history = createMemoryHistory();
  const route = "/404";
  history.push(route);

  const { getByTestId } = renderWithRedux(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("error-page")).toHaveTextContent(ERROR.NOT_FOUND);
});
