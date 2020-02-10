import React from "react";
import { BlockHeader } from "./../../component/blockheader/BlockHeader";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockCta } from "./../../component/blockcta/BlockCta";
import { BlockBtn } from "./../../component/blockbtn/BlockBtn";

export const MailTree = props => {
  
  const propsTree = props.apptree;

  return (
    <>
      {Object.keys(propsTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return <BlockHeader key={index} apptree={propsTree} toggleDrawer={props.toggleDrawer} index={index} />
        } else if (nodeType === "banner") {
          return <BlockBanner key={index} apptree={propsTree} toggleDrawer={props.toggleDrawer} index={index} />
        } else if (nodeType === "paragraph") {
          return <BlockParagraph key={index} apptree={propsTree} toggleDrawer={props.toggleDrawer} index={index} />
        } else if (nodeType === "cta") {
          return <BlockCta key={index} apptree={propsTree} toggleDrawer={props.toggleDrawer} />
        } else if (nodeType === "btn") {
          return <BlockBtn key={index} apptree={propsTree} toggleDrawer={props.toggleDrawer} />
        } else {
          return null
        }
      })}
    </>
  );
};


