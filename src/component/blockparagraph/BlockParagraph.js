import React from "react";

export const BlockParagraph = props => {
  const { blockTree } = props.appState;

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

  const paragraphTextBlocks = blockTree.paragraph.text.split(/\n/);

  return (
    <div
      className="js-block"
      block-id={props.index}
      onClick={e => {
        props.setBlockType("paragraph");
        props.toggleDrawer("bottom", true)(e);
      }}
    >
      {paragraphTextBlocks.map((paragraphText, index) => {
        if (paragraphText) {
          return (
            <p style={styleParagraph} key={index}>
              {paragraphText}
            </p>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
