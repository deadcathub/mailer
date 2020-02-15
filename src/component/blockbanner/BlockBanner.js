import React from "react";

export const BlockBanner = props => {
  const { dataSet, blockTree } = props.appState;

  const styleBanner = {
    maxWidth: "100%",
    height: "auto",
    border: "0",
    textDecoration: "none",
    margin: "0 0 30px",
    display: "block"
  };

  return (
    <a
      className="js-block"
      block-id={props.index}
      href={`https://astro7.ru/${
        dataSet.landUrl
      }/?hash={AUTOLOGIN_HASH}&utm_source=email&utm_medium=${
        dataSet.letterType
      }&utm_campaign=${
        dataSet.letterType === "letter"
          ? dataSet.letterDateFormat
          : dataSet.letterSlogan
      }&utm_content=promo&{PIXEL_LETTER_CLICKED}`}
      onClick={e => {
        props.setBlockType("banner");
        props.toggleDrawer("bottom", true)(e);
      }}
      style={{ display: "block" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={blockTree.banner.url}
        style={styleBanner}
        width="680"
        height=""
        alt={blockTree.banner.alt}
      />
    </a>
  );
};
