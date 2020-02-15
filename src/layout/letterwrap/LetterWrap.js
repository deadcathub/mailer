import React from "react";
import { BlockFooter } from "./../../component/blockfooter/BlockFooter";

export const LetterWrap = props => (
  <div className="js-letter letter-wrap">
    <center style={{ width: "100%", textAlign: "left" }}>
      <div
        style={{
          maxWidth: "680px",
          padding: "0 10px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
        {props.children}
        <BlockFooter />
      </div>
    </center>
  </div>
);
