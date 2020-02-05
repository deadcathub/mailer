import React from "react";
import { BlockHeader } from "./../../component/blockheader/BlockHeader";
import { BlockBanner } from "./../../component/blockbanner/BlockBanner";
import { BlockParagraph } from "./../../component/blockparagraph/BlockParagraph";
import { BlockOutro } from "./../../component/blockoutro/BlockOutro";

export const MailTree = props => {

  const propsTree = props.apptree;

  return (
    <>
      {Object.keys(propsTree).map((nodeType, index) => {
        if (nodeType === "header") {
          return <BlockHeader key={index} apptree={propsTree} index={index} />
        } else if (nodeType === "banner") {
          return <BlockBanner key={index} apptree={propsTree} index={index} />
        } else if (nodeType === "paragraph") {
          return <BlockParagraph key={index} apptree={propsTree} index={index} />
        } else if (nodeType === "outro") {
          return <BlockOutro key={index} apptree={propsTree} />
        } else {
          return null
        }
      })}
    </>
  );
};


