import React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import "./Panel.scss";

export const Panel = props => {
  const { dataSet } = props.appState;

  // var today = new Date();
  // var tomorrow = new Date();
  // tomorrow.setDate(today.getDate()+1);

  // const [selectedDate, setSelectedDate] = React.useState(null);
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  // useEffect(() => {
  //   console.log(basicUrl, mailType);
  // });

  return (
    <>
      <ul className="panel">
        <li className="panel_item">
          <RadioGroup row value={dataSet.letterType} onChange={props.сhangeLetterType}>
            <FormControlLabel
              value="letter"
              control={<Radio color="primary" />}
              label="Обычная"
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
        <li className="panel_item">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={3}>
              <TextField
                onChange={props.handleInput}
                name="landUrl"
                label="URL посадочной"
                variant="filled"
              />
            </Grid>
            <Grid item xs={3}>
            {dataSet.letterType === 'letter' ? (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  inputVariant="filled"
                  disablePast="true"
                  format="dd.MM.yyyy"
                  id="date-picker-inline"
                  label="Дата отправки"
                  value={dataSet.letterDate}
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
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
            </Grid>
          </Grid>
        </li>
      </ul>
    </>
  );
};


