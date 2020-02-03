import React from "react";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockCta } from "./../../component/blockcta/BlockCta";
import { BlockButton } from "./../../component/blockbutton/BlockButton";

export const MailTree = props => {

  const propsTree = props.apptree;

  return (
    <>
      {Object.keys(propsTree).map((nodeType, index) => {
        if (nodeType === "banner") {
          return <BlockBanner key={index} apptree={propsTree} index={index} />
        } else if (nodeType === "paragraph") {
          return <BlockParagraph key={index} apptree={propsTree} index={index} />
        } else if (nodeType === "cta") {
          return <BlockCta key={index} apptree={propsTree} />
        } else if (nodeType === "button") {
          return <BlockButton key={index} apptree={propsTree} />
        }
      })}
    </>
  );
};


