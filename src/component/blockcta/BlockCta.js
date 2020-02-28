import React from "react";

export const BlockCta = props => {
  const { letterTree } = props.appState;

  const styleCta = {
    maxWidth: "500px",
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "21px",
    lineHeight: "1.6",
    color: "#222222",
    textAlign: "center",
    padding: "0",
    margin: "0 auto"
  };

  return (
    <div
      className="js-block"
      block-id={props.index}
      onClick={e => {
        props.setBlockType("cta");
        props.toggleDrawer("bottom", true)(e);
      }}
      style={{ marginTop: 30, marginBottom: 30 }}
    >
      <p align="center" valign="top" style={styleCta}>
        {letterTree.cta.text}
      </p>
    </div>
  );
};
