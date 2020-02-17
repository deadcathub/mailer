import React from "react";
import { BlockHeader } from "./../../component/blockheader/BlockHeader";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockCta } from "./../../component/blockcta/BlockCta";
import { BlockBtn } from "./../../component/blockbtn/BlockBtn";

export const BlockTree = props => {
  const appState = props.appState,
    setBlockType = props.setBlockType,
    toggleDrawer = props.toggleDrawer,
    localState = {
      appState,
      setBlockType,
      toggleDrawer
    };

  return (
    <>
      {Object.keys(props.appState.blockTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return <BlockHeader {...localState} index={index} key={index} />;
        } else if (nodeType === "banner") {
          return <BlockBanner {...localState} index={index} key={index} />;
        } else if (nodeType === "paragraph") {
          return <BlockParagraph {...localState} index={index} key={index} />;
        } else if (nodeType === "cta") {
          return <BlockCta {...localState} index={index} key={index} />;
        } else if (nodeType === "btn") {
          return <BlockBtn {...localState} index={index} key={index} />;
        } else {
          return null;
        }
      })}
    </>
  );
};
