import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { LetterWrap } from "./layout/letterwrap/LetterWrap";
import { BlockTree } from "./layout/blocktree/BlockTree";
import { Panel } from "./component/panel/Panel";
import { DrawerCnt } from "./component/drawercnt/DrawerCnt";

export class App extends Component {
  state = {
    dataSet: {
      landUrl: undefined,
      letterType: "letter",
      letterSlogan: undefined,
      letterDate: null,
      letterDateFormat: null
    },
    blockTree: {
      header: {
        text: `Вращайте Колесо Фортуны и выигрывайте ценные призы`
      },
      banner: {
        url: `https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/fortune-wheel.jpg`
      },
      paragraph: {
        text: `Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через Центр поддержки клиентов.
              Чтобы вы могли убедиться в том, что консультации гадалок по телефону действительно эффективны, мы предоставляем возможность заказать гадание по телефону бесплатно.`
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

  сhangeLetterType = e => {
    const localDataSet = this.state.dataSet;
    localDataSet.letterType = e.target.value;
    this.setState({
      dataSet: localDataSet
    });
  };

  handleInput = e => {
    const localDataSet = this.state.dataSet,
      targetName = e.target.name;
    if (targetName === "landUrl") {
      localDataSet.landUrl = e.target.value;
    } else if (targetName === "letterSlogan") {
      localDataSet.letterSlogan = e.target.value;
    }
    this.setState({
      dataSet: localDataSet
    });
  };

  handleDateChange = date => {
    const localDataSet = this.state.dataSet,
      formatDate = String(date.getDate()).padStart(2, '0') + String(date.getMonth() + 1).padStart(2, '0') + String(date.getFullYear());
    localDataSet.letterDate = date;
    localDataSet.letterDateFormat = formatDate;
    this.setState({
      dataSet: localDataSet
    });
    console.log(formatDate);
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
    this.setState({
      blockTree: localState,
      blockType: null,
      bottom: false
    });
  };

  // componentDidMount() {
  //   console.log('app did mount');
  // }

  render() {
    return (
      <>
        <Container maxWidth="md">
          <Panel
            appState={this.state}
            handleInput={this.handleInput}
            сhangeLetterType={this.сhangeLetterType}
            handleDateChange={this.handleDateChange}
          />
          <LetterWrap>
            <BlockTree
              appState={this.state}
              toggleDrawer={this.toggleDrawer}
              setBlockType={this.setBlockType}
            />
          </LetterWrap>
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
