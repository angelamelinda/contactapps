import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import ListContact from "./containers/ListContact";
import FormContact from "./containers/FormContact";
import { Container, GlobalStyle, Toast, ErrorPage } from "./styled/App";
import { IAppState } from "./interfaces/state";
import { connect } from "react-redux";
import { ERROR } from "./constants";

interface IApp {
  state: IAppState;
}

const App: FC<IApp> = (app: IApp) => {
  const { toast } = app.state.commonReducer;
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ListContact}></Route>
        <Route exact path="/new" component={FormContact}></Route>
        <Route exact path="/contact/:id" component={FormContact}></Route>
        <Route exact path="/" component={ListContact}></Route>
        <Route
          component={() => (
            <ErrorPage data-testid="error-page">{ERROR.NOT_FOUND}</ErrorPage>
          )}
        />
      </Switch>
      {toast && <Toast> {toast}</Toast>}
    </Container>
  );
};

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
