import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Header } from "./component/header/Header";
import { Panel } from "./component/panel/Panel";
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { MailTree } from "./layout/mailtree/MailTree";

// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { AuthProvider, AuthConsumer } from "./context/Auth";

class App extends Component {

  appState = {
    mailTree: {
      banner: {
        link: `https://astro7.ru/experts/all/`,
        url: `https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/fortune-wheel.jpg`
      },
      paragraph: {
        text: `Летнее солнцестояние приходится на самый длинный день и самую короткую в году, когда высота
               подъёма Солнца на небосклоне является самой высокой. Поскольку летнее солнцестояние длится только
               краткий момент времени, этого дня, когда происходит летнее солнцестояние, используют другие названия.`
      },
      cta: {
        text: `Вращайте Колесо Фортуны и выигрывайте ценные призы`
      },
      button: {
        link: `https://astro7.ru/experts/all/`,
        text: `Пополнить счет`
      }
    }
  };

  render() {
    return (
      <>
        <Header />
        <Container maxWidth="lg">
          <Panel />
          <MailWrap>
            <MailTree apptree={this.appState.mailTree} />
          </MailWrap>
        </Container>
      </>
    );
  }
};

export default App


