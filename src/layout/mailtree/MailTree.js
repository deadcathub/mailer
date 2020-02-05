import React from "react";
import { BlockHeader } from "./../../component/blockheader/BlockHeader";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockCta } from "./../../component/blockcta/BlockCta";
import { BlockButton } from "./../../component/blockbutton/BlockButton";

export const MailTree = props => {
  const propsTree = props.apptree;

  return (
    <>
      {Object.keys(propsTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return <BlockHeader key={index} apptree={propsTree} index={index} />;
        } else if (nodeType === "banner") {
          return <BlockBanner key={index} apptree={propsTree} index={index} />;
        } else if (nodeType === "paragraph") {
          return (
            propsTree.paragraph.map((paragraphItem, index) => {
              return <BlockParagraph key={index} itemText={paragraphItem.text} index={index} />
            })
          )
        } else if (nodeType === "cta") {
          return <BlockCta key={index} apptree={propsTree} />;
        } else if (nodeType === "button") {
          return <BlockButton key={index} apptree={propsTree} />;
        } else {
          return null;
        }
      })}
    </>
  );
};


