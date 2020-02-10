import React from "react";

export const BlockParagraph = props => {
  const styleParagraph = {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "17px",
    fontWeight: "normal",
    lineHeight: "1.5",
    color: "#222222",
    padding: "0",
    marginTop: "15px",
    marginBottom: "15px"
  };

  const paragraphTextBlocks = props.blockTree.paragraph.text.split(/\n/);

  return (
    <div
      className="js-block"
      block-id={props.index}
      onClick={(e) => {
        props.setEditBlockType("paragraph");
        props.toggleDrawer("bottom", true)(e);
      }}
    >
      {paragraphTextBlocks.map((paragraphText, index) => {
        return (
          <p style={styleParagraph} key="index">
            {paragraphText}
          </p>
        );
      })}
    </div>
  );
};


