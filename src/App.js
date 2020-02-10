import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { BlockTree } from "./layout/blocktree/BlockTree";
import { Panel } from "./component/panel/Panel";
import { DrawerCnt } from "./component/drawercnt/DrawerCnt";

import Drawer from "@material-ui/core/Drawer";

class App extends Component {
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
    editBlockType: "banner"
  };

  setEditBlockType = blockType => {
    this.setState({
      editBlockType: blockType
    });
  };

  // componentDidMount() {
  //   this.setEditBlockType();
  // }

  toggleDrawer = (side, open) => e => {
    this.setState({ [side]: open });
    e.preventDefault();
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
              setEditBlockType={this.setEditBlockType}
            />
          </MailWrap>
        </Container>
        <Drawer
          className="b-modal"
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <Container
            maxWidth="md"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <DrawerCnt
              anchor={"bottom"}
              blockTree={this.state.blockTree}
              editblocktype={this.state.editBlockType}
            />
          </Container>
          <Container
            className="b-modal_panel"
            maxWidth="md"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <Button color="secondary">Удалить блок</Button>
            <Button variant="contained" color="primary">Сохранить</Button>
          </Container>
        </Drawer>
      </>
    );
  }
}

export default App;
