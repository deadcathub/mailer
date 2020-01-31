import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Header } from "./component/Header";
import { Main } from "./page/Main";
import { About } from "./page/About";

// import { AuthProvider, AuthConsumer } from "./context/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Switch>
          <Route path={"/"} exact component={Main} />
          <Route path={"/about"} component={About} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
