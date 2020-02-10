import React from "react";

export const BlockBtn = props => {
  const styleButton = {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "1.5",
    textAlign: "center",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: ".1em",
    color: "#ffffff",
    backgroundColor: "#f85160",
    padding: "17px 30px",
    borderRadius: "6px",
    display: "inline-block"
  };

  return (
    <div
      className="js-block"
      block-id={props.index}
      onClick={(e) => {
        props.setEditBlockType("btn");
        props.toggleDrawer("bottom", true)(e);
      }}
      style={{ textAlign: "center", marginTop: "30px" }}
    >
      <a
        href={props.blockTree.btn.link}
        style={styleButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.blockTree.btn.text}
      </a>
    </div>
  );
};


