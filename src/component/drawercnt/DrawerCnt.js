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
import Container from "@material-ui/core/Container";

export const DrawerCnt = props => {

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

  if ( props.editblocktype === "banner" ) {
    return (
      <Container maxWidth="lg" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <span>banner</span><br /><br />
          <TextField
            id="filled-textarea"
            label="Ссылка на картинку"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Адресная ссылка"
            multiline
            variant="filled"
          />
      </Container>
    )
  } else if ( props.editblocktype === "paragraph" ) {
    return (
      <Container maxWidth="lg" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <span>paragraph</span><br /><br />
      </Container>
    )
  } else if ( props.editblocktype === "cta" ) {
    return (
      <Container maxWidth="lg" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <span>cta</span><br /><br />
      </Container>
    )
  } else if ( props.editblocktype === "btn" ) {
    return (
      <Container maxWidth="lg" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <span>btn</span><br /><br />
      </Container>
    )
  } else {
    return null
  }
};


