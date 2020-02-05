import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import './Panel.scss'

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
    <>
      <ul className="panel">
        <li className="panel_item">
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
        </li>
        <li className="panel_item">
          <TextField
            label="Слоган акции"
            id="outlined-size-normal"
            variant="filled"
          />
        </li>
        <li className="panel_item">
          <TextField
            id="filled-textarea"
            label="Скрытый текст"
            multiline
            variant="filled"
          />
        </li>
      </ul>
      <Tooltip title="Добавить блок после" enterDelay={500} aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Редактировать блок" enterDelay={500} aria-label="edit">
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Tooltip>
    </>

  );
};


