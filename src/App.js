import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Panel } from "./component/panel/Panel";
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { MailTree } from "./layout/mailtree/MailTree";
import defaultBanner from './component/default-banner.png';

import Drawer from '@material-ui/core/Drawer';


class App extends Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  }

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
          text: `Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через Центр поддержки клиентов.`
      },
      outro: {
        ctaText: `Вращайте Колесо Фортуны и выигрывайте ценные призы`,
        btnLink: `https://astro7.ru/experts/all/`,
        btnText: `Вращать колесо`
      }
    }
  };

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };

  render() {
    return (
      <>
        <Container maxWidth="lg">
          <Panel />
          <MailWrap>
            <MailTree apptree={this.appState.mailTree} toggleDrawer={this.toggleDrawer} />
          </MailWrap>
        </Container>

        <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <Container maxWidth="lg">
            <br /><br /><br /><br /><br />123 <br /><br /><br /><br /><br />
          </Container>
        </Drawer>

      </>
    );
  }
};

export default App


