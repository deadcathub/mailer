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

  return (
    <p style={styleParagraph}>
      {props.index} {props.itemText}
    </p>
  );
};


