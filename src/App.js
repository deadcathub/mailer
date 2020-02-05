import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Panel } from "./component/panel/Panel";
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { MailTree } from "./layout/mailtree/MailTree";
import defaultBanner from './component/default-banner.png';


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
      paragraph: {
          text: `1 Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через Центр поддержки клиентов.\n2 Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям.`
      },
      outro: {
        ctaText: `Вращайте Колесо Фортуны и выигрывайте ценные призы`,
        btnLink: `https://astro7.ru/experts/all/`,
        btnText: `Вращать колесо`
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


