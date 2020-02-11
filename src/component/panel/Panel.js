import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import "./Panel.scss";

export const Panel = props => {
  // const inputLabel = React.useRef(null);
  const [basicUrl, setBasicUrl] = useState("");
  const handleChangeSelect = e => {
    setBasicUrl(e.target.value);
  };

  const [mailType, setMailType] = useState("letter");
  const handleChangeRadio = e => {
    setMailType(e.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log(basicUrl, mailType);
  });

  return (
    <>
      <ul className="panel">
        <li className="panel_item">

          <RadioGroup row value={mailType} onChange={handleChangeRadio}>
            <FormControlLabel
              value="letter"
              control={<Radio color="primary" />}
              label="Обычная"
              labelPlacement="end"
            />
            <FormControlLabel
              value="auto-letter"
              control={<Radio color="primary" />}
              label="Контентная"
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
                label="URL посадочной"
                variant="filled"
                defaultValue={`landing-page`}
                onChange={handleChangeSelect}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  inputVariant="filled"
                  disablePast="true"
                  format="dd.MM.yyyy"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

        </li>
      </ul>
    </>
  );
};
