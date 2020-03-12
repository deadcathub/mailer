import React from "react";
import Button from "@material-ui/core/Button";
import { BlockFooter } from "./../../component/BlockFooter/BlockFooter";
import "./LetterWrap.scss";

export const LetterWrap = props => {

    React.useEffect(() => {
      document.querySelector(".js-btn").addEventListener("click", () => {
        const elt = document.createElement("textarea");
        elt.value = document.querySelector(".js-letter").innerHTML;
        document.body.appendChild(elt);
        elt.select();
        document.execCommand("copy");
        document.body.removeChild(elt);
      });
    });

    return (
      <div className="LetterWrap">
        <div className="js-letter">
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
        </div>
        <Button
          className="js-btn LetterWrapBtn"
          size="large"
          color="primary"
          variant="contained"
        >
          Скопировать
        </Button>
      </div>
    );
    
};
