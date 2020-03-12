import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "./Panel.scss";

export const Panel = props => {
  const { dataSet } = props.appState;

  return (
    <>
      <ul className="Panel">
        <li className="PanelItem">
          <RadioGroup
            value={dataSet.letterType}
            onChange={props.сhangeLetterType}
            row
          >
            <FormControlLabel
              value="letter"
              control={<Radio color="primary" />}
              label="Обычная рассылка"
              labelPlacement="end"
            />
            <FormControlLabel
              value="auto-letter"
              control={<Radio color="primary" />}
              label="Автошаблон"
              labelPlacement="end"
            />
          </RadioGroup>
        </li>
        <li className="PanelItem">
          <TextField
            onChange={props.handleInput}
            name="landUrl"
            label="URL посадочной"
            variant="filled"
          />
          {dataSet.letterType === "letter" ? (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                inputVariant="filled"
                disablePast="true"
                format="dd.MM.yyyy"
                label="Дата отправки"
                invalidDateMessage={null}
                minDateMessage={null}
                value={dataSet.letterDate}
                onChange={props.handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          ) : (
            <TextField
              onChange={props.handleInput}
              defaultValue={dataSet.letterSlogan}
              name="letterSlogan"
              label="Слоган автошаблона"
              variant="filled"
            />
          )}
          <Button
            className="js-btn"
            size="large"
            color="primary"
            variant="contained"
            onClick={props.handleIsSetComplete}
          >
            Дальше
          </Button>
        </li>
      </ul>
    </>
  );
};
