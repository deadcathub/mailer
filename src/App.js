import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
        text: "Вращайте Колесо Фортуны и выигрывайте ценные призы"
      },
      banner: {
        url:
          "https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/fortune-wheel.jpg",
        alt: "Lorem ipsum dolor sit amet, consectetur"
      },
      paragraph: {
        text: `Вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям, заказанным через Центр поддержки клиентов.\n\nЧтобы вы могли убедиться в том, что консультации гадалок по телефону действительно эффективны, мы предоставляем возможность заказать гадание по телефону бесплатно.`
      },
      cta: {
        text: "Вращайте Колесо Фортуны и выигрывайте ценные призы"
      },
      btn: {
        text: "Вращать колесо"
      }
    },
    blockType: null
  };

  сhangeLetterType = e => {
    const localDataSet = { ...this.state.dataSet };
    localDataSet.letterType = e.target.value;
    this.setState({
      dataSet: localDataSet
    });
  };

  handleInput = e => {
    const localDataSet = { ...this.state.dataSet },
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
    const localDataSet = { ...this.state.dataSet },
      formatDate =
        String(date.getDate()).padStart(2, "0") +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getFullYear());
    localDataSet.letterDate = date;
    localDataSet.letterDateFormat = formatDate;
    this.setState({
      dataSet: localDataSet
    });
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
    const localState = { ...this.state.blockTree };
    delete localState[this.state.blockType];
    this.setState({
      blockTree: localState,
      blockType: null,
      bottom: false
    });
  };

  submitDrawerData = e => {
    const localState = { ...this.state.blockTree },
      localStateNode = localState[this.state.blockType];
    if (localStateNode.url) {
      localStateNode.url = e.target.urlField.value;
    }
    if (localStateNode.link) {
      localStateNode.link = e.target.linkField.value;
    }
    if (localStateNode.text) {
      localStateNode.text = e.target.textField.value;
    }
    if (localStateNode.alt) {
      localStateNode.alt = e.target.altField.value;
    }
    this.setState({
      blockTree: localState,
      blockType: null,
      bottom: false
    });
    e.preventDefault();
  };

  copyLetterCode = () => {
    const target = document.querySelector(".js-letter"),
      rng = document.createRange(),
      sel = window.getSelection();
    rng.selectNode(target);
    sel.removeAllRanges();
    sel.addRange(rng);
    document.execCommand("copy");
  };

  render() {
    return (
      <>
        <Container maxWidth="md">
          <Panel
            appState={this.state}
            handleInput={this.handleInput}
            сhangeLetterType={this.сhangeLetterType}
            handleDateChange={this.handleDateChange}
            copyLetterCode={this.copyLetterCode}
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
          <Container
            maxWidth="md"
            style={{ paddingTop: "50px", paddingBottom: "100px" }}
          >
            <form
              onSubmit={this.submitDrawerData}
              noValidate
              autoComplete="off"
            >
              <DrawerCnt
                blockTree={this.state.blockTree}
                blockType={this.state.blockType}
              />
              <Grid
                container
                className="b-modal_panel"
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button onClick={this.deleteBlock} size="large">
                  Удалить
                </Button>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Сохранить
                </Button>
              </Grid>
            </form>
          </Container>
        </Drawer>
      </>
    );
  }
}
