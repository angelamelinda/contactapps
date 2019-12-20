import React from "react";
import { Switch, Route } from "react-router-dom";
import ListContact from "./containers/ListContact";
import { Container, GlobalStyle } from "./styled/App";
import FormContact from "./components/FormContact";

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ListContact}></Route>
        <Route exact path="/new" component={FormContact}></Route>
        <Route exact path="/contact/:id" component={FormContact}></Route>
      </Switch>
    </Container>
  );
};

export default App;
