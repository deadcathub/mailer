import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { BlockTree } from "./layout/blocktree/BlockTree";
import { Panel } from "./component/panel/Panel";
import { DrawerCnt } from "./component/drawercnt/DrawerCnt";

import Drawer from "@material-ui/core/Drawer";

export class App extends Component {
  state = {
    blockTree: {
      header: {
        link: `https://astro7.ru/`
      },
      banner: {
        link: `https://astro7.ru/experts/all/`,
        url: `https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/fortune-wheel.jpg`
      },
      paragraph: {
        text: `Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через Центр поддержки клиентов.\nЧтобы вы могли убедиться в том, что консультации гадалок по телефону действительно эффективны, мы предоставляем возможность заказать гадание по телефону бесплатно.`
      },
      cta: {
        text: `Вращайте Колесо Фортуны и выигрывайте ценные призы`
      },
      btn: {
        link: `https://astro7.ru/experts/all/`,
        text: `Вращать колесо`
      }
    },
    blockType: null
  };

  setBlockType = blockType => {
    this.setState({
      blockType: blockType
    });
  };

  toggleDrawer = (side, open) => e => {
    this.setState({ [side]: open });
    e.preventDefault();
  };

  deleteBlock = () => {
    const localState = this.state.blockTree;
    delete localState[this.state.blockType];
    this.setState({ blockTree: localState, blockType: null, bottom: false });
  };

  render() {
    return (
      <>
        <Container maxWidth="md">
          <Panel />
          <MailWrap>
            <BlockTree
              blockTree={this.state.blockTree}
              toggleDrawer={this.toggleDrawer}
              setBlockType={this.setBlockType}
            />
          </MailWrap>
        </Container>
        <Drawer
          className="b-modal"
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <Container maxWidth="md" style={{ paddingTop: "50px" }}>
            <DrawerCnt
              anchor={"bottom"}
              blockTree={this.state.blockTree}
              editblocktype={this.state.blockType}
            />
          </Container>
          <Container
            className="b-modal_panel"
            maxWidth="md"
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            <Button onClick={this.deleteBlock} size="large">
              Удалить
            </Button>
            <Button size="large" color="primary" variant="contained">
              Сохранить
            </Button>
          </Container>
        </Drawer>
      </>
    );
  }
}
