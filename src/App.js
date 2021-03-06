import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { LetterWrap } from "./layout/LetterWrap/LetterWrap";
import { LetterTree } from "./layout/LetterTree/LetterTree";
import { SetPanel } from "./component/SetPanel/SetPanel";
import { DrawerCnt } from "./component/DrawerCnt/DrawerCnt";
import { StartPage } from "./layout/StartPage/StartPage";
import "./App.scss";

export class App extends Component {
  state = {
    letterData: [
      {
        letterName: "Обычная",
        letterTree: {
          header: {
            text: "Скрытый текст первой рассылки"
          },
          banner: {
            url:
              "https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/fortune-wheel.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, вы можете вращать Колесо Фортуны и выигрывать подарки каждые субботу и воскресенье. А сегодня мы добавляем до 12 мин. к консультациям.\nЧтобы вы могли убедиться в том, что консультации гадалок по телефону действительно эффективны, мы предоставляем возможность заказать гадание по телефону бесплатно.`
          },
          cta: {
            text: "Вращайте Колесо Фортуны и выигрывайте ценные призы"
          },
          btn: {
            text: "Вращать колесо"
          }
        }
      },
      {
        letterType: "group",
        letterName: "Пополнение ₽",
        letterTree: {
          header: {
            text: "Скрытый текст"
          },
          banner: {
            url:
              "https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/replenish-october.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, как любое начинание, год Крысы, открывающий новый цикл в восточном календаре, не обещает быть очень легким. Но мы желаем вам, чтобы несмотря ни на какие преграды, в вашей жизни всегда были те, кто протянет руку помощи в нужный момент.\nУзнайте, что вас ждет в будущем году у наших экспертов. Тем более, что сегодня, 30 декабря, Astro7 дарит вам бонус +‍200 руб. при пополнении счета на каждую 1000 рублей. Больше сумма — больше бонус!`
          },
          factoidOne: "rub",
          btn: {
            text: "Пополнить счет"
          }
        }
      },
      {
        letterType: "group",
        letterName: "Пополнение $",
        letterTree: {
          header: {
            text: "Скрытый текст"
          },
          banner: {
            url:
              "https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/replenish-october-usd.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, как любое начинание, год Крысы, открывающий новый цикл в восточном календаре, не обещает быть очень легким. Но мы желаем вам, чтобы несмотря ни на какие преграды, в вашей жизни всегда были те, кто протянет руку помощи в нужный момент.\nУзнайте, что вас ждет в будущем году у наших экспертов. Тем более, что сегодня, 30 декабря, Astro7 дарит вам бонус +‍200 руб. при пополнении счета на каждую 1000 рублей. Больше сумма — больше бонус!`
          },
          factoidOne: "usd",
          btn: {
            text: "Пополнить счет"
          }
        }
      },
      {
        letterType: "group",
        letterName: "Пополнение €",
        letterTree: {
          header: {
            text: "Скрытый текст"
          },
          banner: {
            url:
              "https://user98023.clients-cdnnow.ru/images/newsletter/mail/2019/temporary/mail/replenish-october-eur.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, как любое начинание, год Крысы, открывающий новый цикл в восточном календаре, не обещает быть очень легким. Но мы желаем вам, чтобы несмотря ни на какие преграды, в вашей жизни всегда были те, кто протянет руку помощи в нужный момент.\nУзнайте, что вас ждет в будущем году у наших экспертов. Тем более, что сегодня, 30 декабря, Astro7 дарит вам бонус +‍200 руб. при пополнении счета на каждую 1000 рублей. Больше сумма — больше бонус!`
          },
          factoidOne: "eur",
          btn: {
            text: "Пополнить счет"
          }
        }
      },
      {
        letterType: "group",
        letterName: "Скидка ₽",
        letterTree: {
          header: {
            text: "Скрытый текст"
          },
          banner: {
            url:
              "https://astro7.ru/images/newsletter/mail/2019/temporary/mail/discount-may.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, когда Солнце переходит в нулевой градус знака Овна, начинается новый астрологический год. Овен характеризует бодрость, целеустремленность, порывистость. Еще один возможный блок, когда люди не видят никого или не видят лица. Вовсе получают образы животных. Это говорит о проблемах.`
          },
          factoidTwo: "rub",
          btn: {
            text: "Заказать консультацию"
          }
        }
      },
      {
        letterType: "group",
        letterName: "Скидка $",
        letterTree: {
          header: {
            text: "Скрытый текст"
          },
          banner: {
            url:
              "https://astro7.ru/images/newsletter/mail/2019/temporary/mail/discount-may.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, когда Солнце переходит в нулевой градус знака Овна, начинается новый астрологический год. Овен характеризует бодрость, целеустремленность, порывистость. Еще один возможный блок, когда люди не видят никого или не видят лица. Вовсе получают образы животных. Это говорит о проблемах.`
          },
          factoidTwo: "usd",
          btn: {
            text: "Заказать консультацию"
          }
        }
      },
      {
        letterType: "group",
        letterName: "Скидка €",
        letterTree: {
          header: {
            text: "Скрытый текст"
          },
          banner: {
            url:
              "https://astro7.ru/images/newsletter/mail/2019/temporary/mail/discount-may.jpg"
          },
          paragraph: {
            text: `{FIRSTNAME}, когда Солнце переходит в нулевой градус знака Овна, начинается новый астрологический год. Овен характеризует бодрость, целеустремленность, порывистость. Еще один возможный блок, когда люди не видят никого или не видят лица. Вовсе получают образы животных. Это говорит о проблемах.`
          },
          factoidTwo: "eur",
          btn: {
            text: "Заказать консультацию"
          }
        }
      }
    ],
    isSetComplete: false,
    letterType: null,
    blockType: null,
    letterTree: null,
    dataSet: {
      landUrl: undefined,
      letterType: "letter",
      letterSlogan: undefined,
      letterDate: null,
      letterDateFormat: null
    }
  };

  setDataSet = index => {
    this.setState({
      letterTree: this.state.letterData[index]["letterTree"]
    });
  };

  сhangeLetterType = e => {
    const dataSet = { ...this.state.dataSet };
    dataSet.letterType = e.target.value;
    this.setState({
      dataSet
    });
  };

  handleIsSetComplete = () => {
    this.setState({
      isSetComplete: true
    });
  };

  handleInput = e => {
    const dataSet = { ...this.state.dataSet },
      targetName = e.target.name;
    if (targetName === "landUrl") {
      dataSet.landUrl = e.target.value;
    } else if (targetName === "letterSlogan") {
      dataSet.letterSlogan = e.target.value;
    }
    this.setState({
      dataSet
    });
  };

  handleDateChange = date => {
    const dataSet = { ...this.state.dataSet },
      formatDate =
        String(date.getDate()).padStart(2, "0") +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getFullYear());
    dataSet.letterDate = date;
    dataSet.letterDateFormat = formatDate;
    this.setState({
      dataSet
    });
  };

  setBlockType = blockType => {
    this.setState({
      blockType
    });
  };

  toggleDrawer = (side, open) => e => {
    this.setState({
      [side]: open
    });
    e.preventDefault();
  };

  deleteBlock = () => {
    const letterTree = { ...this.state.letterTree };
    delete letterTree[this.state.blockType];
    this.setState({
      letterTree,
      blockType: null,
      bottom: false
    });
  };

  submitDrawerData = e => {
    const letterTree = { ...this.state.letterTree },
      localStateNode = letterTree[this.state.blockType];
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
      letterTree,
      blockType: null,
      bottom: false
    });
    e.preventDefault();
  };

  render() {
    const letterTree = this.state.letterTree;
    return (
      <>
        {!letterTree ? (
          <StartPage
            letterData={this.state.letterData}
            setDataSet={this.setDataSet}
          />
        ) : !this.state.isSetComplete ? (
          <SetPanel
            appState={this.state}
            handleInput={this.handleInput}
            сhangeLetterType={this.сhangeLetterType}
            handleDateChange={this.handleDateChange}
            handleIsSetComplete={this.handleIsSetComplete}
          />
        ) : (
          <>
            <Container maxWidth="md">
              <LetterWrap>
                <LetterTree
                  appState={this.state}
                  toggleDrawer={this.toggleDrawer}
                  setBlockType={this.setBlockType}
                />
              </LetterWrap>
            </Container>
            <Drawer
              className="Modal"
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
                    letterTree={this.state.letterTree}
                    blockType={this.state.blockType}
                  />
                  <Grid
                    container
                    className="ModalPanel"
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
        )}
      </>
    );
  }
}
