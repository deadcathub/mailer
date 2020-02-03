import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";

export const Panel = props => {

  const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 200
    }
  }));
  const classes = useStyles();

  const [age, setAge] = useState("");
  // const inputLabel = React.useRef(null);

  useEffect(() => {
    // console.log(age);
  }, []);

  const handleChange = e => {
    setAge(e.target.value);
  };

  return (
    <div className="test">

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Тип рассылки</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>Разовая</MenuItem>
          <MenuItem value={2}>Периодическая</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <TextField
        label="Слоган акции"
        id="outlined-size-normal"
        variant="filled"
      />

      <br />
      <br />

      <TextField
        id="filled-textarea"
        label="Скрытый текст"
        multiline
        variant="filled"
      />

      <br />
      <br />

      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

    </div>
  );
};


