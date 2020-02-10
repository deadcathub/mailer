import React from "react";
import { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export const DrawerCnt = props => {
  useEffect(() => {
    // console.log(age);
  }, []);

  if (props.editblocktype === "banner") {
    return (
      <TextField
        id="filled-textarea"
        label="Ссылка на картинку"
        multiline
        variant="filled"
        value={props.blockTree.banner.url}
      />
    );
  } else if (props.editblocktype === "paragraph") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        rows="10"
        variant="filled"
        value={props.blockTree.paragraph.text}
      />
    );
  } else if (props.editblocktype === "cta") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        variant="filled"
        value={props.blockTree.cta.text}
      />
    );
  } else if (props.editblocktype === "btn") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        variant="filled"
        value={props.blockTree.btn.text}
      />
    );
  } else {
    return null;
  }
};


