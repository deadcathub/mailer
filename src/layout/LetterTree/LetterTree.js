import React from "react";
import { BlockHeader } from "../../component/BlockHeader/BlockHeader";
import { BlockBanner } from "../../component/BlockBanner/BlockBanner";
import { BlockParagraph } from "../../component/BlockParagraph/BlockParagraph";
import { BlockCta } from "../../component/BlockCta/BlockCta";
import { BlockBtn } from "../../component/BlockBtn/BlockBtn";
import { FactoidOne } from "../../component/FactoidOne/FactoidOne";
import { FactoidTwo } from "../../component/FactoidTwo/FactoidTwo"

export const LetterTree = props => {
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
      {Object.keys(appState.letterTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return <BlockHeader {...localState} index={index} key={index} />;
        } else if (nodeType === "banner") {
          return <BlockBanner {...localState} index={index} key={index} />;
        } else if (nodeType === "paragraph") {
          return <BlockParagraph {...localState} index={index} key={index} />;
        } else if (nodeType === "factoidTwo") {
          return <FactoidTwo {...localState} index={index} key={index} />;
        } else if (nodeType === "factoidOne") {
          return <FactoidOne {...localState} index={index} key={index} />;
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
