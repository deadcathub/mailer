import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Panel } from "./component/panel/Panel";
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { MailTree } from "./layout/mailtree/MailTree";
import defaultBanner from './component/default-banner.png';

// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { AuthProvider, AuthConsumer } from "./context/Auth";

class App extends Component {

  appState = {
    mailTree: {
      header: {
        link: `https://astro7.ru/`
      },
      banner: {
        link: `https://astro7.ru/experts/all/`,
        url: defaultBanner
      },
      paragraph: [
        {
          text: `Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу
                и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через
                Центр поддержки клиентов, чтобы вы смогли получить все нужные ответы.`
        },
        {
          text: `Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу
                и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через
                Центр поддержки клиентов, чтобы вы смогли получить все нужные ответы.`
        }
      ],
      cta: {
        text: `Вращайте Колесо Фортуны и выигрывайте ценные призы`
      },
      button: {
        link: `https://astro7.ru/experts/all/`,
        text: `Вращать колесо`
      }
    }
  };

  render() {
    return (
      <>
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


