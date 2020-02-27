import React from "react";
import TextField from "@material-ui/core/TextField";

export const DrawerCnt = props => {
  const blockTree = props.blockTree,
    blockType = props.blockType;

  // useEffect(() => {
  //   console.log(age);
  // });

  if (blockType === "header") {
    return (
      <TextField
        name="textField"
        label="Скрытый текст"
        defaultValue={blockTree.header.text}
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
          defaultValue={blockTree.banner.url}
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
        defaultValue={blockTree.paragraph.text}
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
        defaultValue={blockTree.cta.text}
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
        defaultValue={blockTree.btn.text}
        fullWidth
        multiline
        variant="filled"
      />
    );
  } else {
    return null;
  }
};
