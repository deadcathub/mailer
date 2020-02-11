import React from "react";
import { BlockHeader } from "./../../component/blockheader/BlockHeader";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockCta } from "./../../component/blockcta/BlockCta";
import { BlockBtn } from "./../../component/blockbtn/BlockBtn";

export const BlockTree = props => {
  
  const blockTree = props.blockTree;

  return (
    <>
      {Object.keys(blockTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return <BlockHeader index={index} key={index} blockTree={blockTree} linkSet={props.linkSet} setBlockType={props.setBlockType} toggleDrawer={props.toggleDrawer} />
        } else if (nodeType === "banner") {
          return <BlockBanner index={index} key={index} blockTree={blockTree} setBlockType={props.setBlockType} toggleDrawer={props.toggleDrawer} />
        } else if (nodeType === "paragraph") {
          return <BlockParagraph index={index} key={index} blockTree={blockTree} setBlockType={props.setBlockType} toggleDrawer={props.toggleDrawer} />
        } else if (nodeType === "cta") {
          return <BlockCta index={index} key={index} blockTree={blockTree} setBlockType={props.setBlockType} toggleDrawer={props.toggleDrawer} />
        } else if (nodeType === "btn") {
          return <BlockBtn index={index} key={index} blockTree={blockTree} setBlockType={props.setBlockType} toggleDrawer={props.toggleDrawer} />
        } else {
          return null
        }
      })}
    </>
  );
};


