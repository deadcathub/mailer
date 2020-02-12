import React from "react";

export const BlockBtn = props => {
  const { linkSet, blockTree } = props.appState;

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
      onClick={e => {
        props.setBlockType("btn");
        props.toggleDrawer("bottom", true)(e);
      }}
      style={{ textAlign: "center", marginTop: "30px" }}
    >
      <a
        href={`https://astro7.ru/${linkSet.landUrl}/?hash={AUTOLOGIN_HASH}&utm_source=email&utm_medium=${linkSet.letterType}&utm_campaign=${linkSet.letterType === 'letter' ? linkSet.letterDate : linkSet.letterSlogan}&utm_content=button&{PIXEL_LETTER_CLICKED}`}
        style={styleButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {blockTree.btn.text}
      </a>
    </div>
  );
};


