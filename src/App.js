import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { MailWrap } from "./layout/mailwrap/MailWrap";
import { BlockTree } from "./layout/blocktree/BlockTree";
import { Panel } from "./component/panel/Panel";
import { DrawerCnt } from "./component/drawercnt/DrawerCnt";
import defaultBanner from "./component/default-banner.png";

import Drawer from "@material-ui/core/Drawer";

class App extends Component {
  state = {
    blockTree: {
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
    console.log('inside');
    this.setState({ [side]: open });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Container maxWidth="lg">
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
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <DrawerCnt
            anchor={"bottom"}
            editblocktype={this.state.editBlockType}
          />
        </Drawer>
      </>
    );
  }
}

export default App;
