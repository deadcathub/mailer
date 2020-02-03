import React from "react";
import "./MailWrap.scss";

export const MailWrap = props => (
  <div className="js-mail-wrapper mail-wrapper">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
    {props.children}
  </div>
);


