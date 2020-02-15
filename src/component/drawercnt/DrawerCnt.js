import React from "react";
import { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

export const DrawerCnt = props => {
  const blockTree = props.blockTree;
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
        defaultValue={blockTree.header.text}
      />
    );
    
  } else if (props.editblocktype === "banner") {
    return (
      <TextField
        id="filled-textarea"
        label="Ссылка на картинку"
        multiline
        variant="filled"
        defaultValue={blockTree.banner.url}
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
        defaultValue={blockTree.paragraph.text}
      />
    );
  } else if (props.editblocktype === "cta") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        variant="filled"
        defaultValue={blockTree.cta.text}
      />
    );
  } else if (props.editblocktype === "btn") {
    return (
      <TextField
        id="filled-textarea"
        label="Текст"
        multiline
        variant="filled"
        defaultValue={blockTree.btn.text}
      />
    );
  } else {
    return null;
  }
};


