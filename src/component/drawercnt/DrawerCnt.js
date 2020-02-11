import React from "react";
import { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

export const DrawerCnt = props => {
  useEffect(() => {
    // console.log(age);
  });

  if (props.editblocktype === "header") {
    return (
      <TextField
        id="filled-textarea"
        label="Скрытый текст"
        multiline
        variant="filled"
        defaultValue={props.blockTree.header.text}
      />
    );
    
  } else if (props.editblocktype === "banner") {
    return (
      <TextField
        id="filled-textarea"
        label="Ссылка на картинку"
        multiline
        variant="filled"
        defaultValue={props.blockTree.banner.url}
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
        defaultValue={props.blockTree.paragraph.text}
      />
    );
  } else if (props.editblocktype === "cta") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        variant="filled"
        defaultValue={props.blockTree.cta.text}
      />
    );
  } else if (props.editblocktype === "btn") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        variant="filled"
        defaultValue={props.blockTree.btn.text}
      />
    );
  } else {
    return null;
  }
};


