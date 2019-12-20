import React from "react";
import { Switch, Route } from "react-router-dom";
import ListContact from "./containers/ListContact";
import { Container, GlobalStyle } from "./styled/App";

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ListContact}></Route>
      </Switch>
    </Container>
  );
};

export default App;
