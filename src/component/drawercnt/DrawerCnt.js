import React from "react";
import TextField from "@material-ui/core/TextField";

export const DrawerCnt = props => {
  const letterTree = props.letterTree,
    blockType = props.blockType;

  if (blockType === "header") {
    return (
      <TextField
        name="textField"
        label="Скрытый текст"
        defaultValue={letterTree.header.text}
        fullWidth
        multiline
        variant="filled"
      />
    );
  } else if (blockType === "banner") {
    return (
      <>
        <TextField
          name="urlField"
          label="URL баннера"
          defaultValue={letterTree.banner.url}
          fullWidth
          multiline
          variant="filled"
        />
      </>
    );
  } else if (blockType === "paragraph") {
    return (
      <TextField
        name="textField"
        label="Текст рассылки"
        defaultValue={letterTree.paragraph.text}
        fullWidth
        multiline
        variant="filled"
      />
    );
  } else if (blockType === "cta") {
    return (
      <TextField
        name="textField"
        label="Текст CTA"
        defaultValue={letterTree.cta.text}
        fullWidth
        multiline
        variant="filled"
      />
    );
  } else if (blockType === "btn") {
    return (
      <TextField
        name="textField"
        label="Текст кнопки"
        defaultValue={letterTree.btn.text}
        fullWidth
        multiline
        variant="filled"
      />
    );
  } else {
    return null;
  }
};
