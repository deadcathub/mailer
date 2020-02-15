import React from "react";
import { BlockHeader } from "./../../component/blockheader/BlockHeader";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockCta } from "./../../component/blockcta/BlockCta";
import { BlockBtn } from "./../../component/blockbtn/BlockBtn";

export const BlockTree = props => {
  const appState = props.appState,
    setBlockType = props.setBlockType,
    toggleDrawer = props.toggleDrawer;

  return (
    <>
      {Object.keys(props.appState.blockTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return (
            <BlockHeader
              index={index}
              key={index}
              appState={appState}
              setBlockType={setBlockType}
              toggleDrawer={toggleDrawer}
            />
          );
        } else if (nodeType === "banner") {
          return (
            <BlockBanner
              index={index}
              key={index}
              appState={appState}
              setBlockType={setBlockType}
              toggleDrawer={toggleDrawer}
            />
          );
        } else if (nodeType === "paragraph") {
          return (
            <BlockParagraph
              index={index}
              key={index}
              appState={appState}
              setBlockType={setBlockType}
              toggleDrawer={toggleDrawer}
            />
          );
        } else if (nodeType === "cta") {
          return (
            <BlockCta
              index={index}
              key={index}
              appState={appState}
              setBlockType={setBlockType}
              toggleDrawer={toggleDrawer}
            />
          );
        } else if (nodeType === "btn") {
          return (
            <BlockBtn
              index={index}
              key={index}
              appState={appState}
              setBlockType={setBlockType}
              toggleDrawer={toggleDrawer}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
