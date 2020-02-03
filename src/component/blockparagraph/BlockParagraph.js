import React from "react";

export const BlockParagraph = props => {

  const styleParagraphWrap = {
    marginTop: '30px 0 30px'
  }

  const styleParagraph = {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "17px",
    fontWeight: "normal",
    lineHeight: "1.5",
    color: "#222222",
    padding: "0",
    marginTop: "15px",
    marginBottom: "15px"
  };

  return (
    <div style={styleParagraphWrap}>
      <p style={styleParagraph}>
        {props.apptree.paragraph.text} {props.index}
      </p>
    </div>
  )

}


