import React from "react";
// import { useEffect } from "react";
import { BlockHidden } from "./../blockhidden/BlockHidden";

export const BlockHeader = props => {
  const { linkSet, blockTree } = props.appState;

  const appState = props.appState;

  const styleLogo = {
    width: "100%",
    maxWidth: "130px",
    height: "auto",
    display: "block",
    border: "0",
    textDecoration: "none"
  };
  const styleHotline = {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "19px",
    lineHeight: "1.1",
    color: "#222222",
    fontWeight: "normal",
    textDecoration: "none",
    whiteSpace: "nowrap"
  };
  const styleLabel = {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "13px",
    lineHeight: "1.1",
    color: "#222222",
    fontWeight: "normal"
  };

  return (
    <div
      className="js-block"
      block-id={props.index}
      onClick={e => {
        props.setBlockType("header");
        props.toggleDrawer("bottom", true)(e);
      }}
    >
      <BlockHidden appState={props.appState} />
      <table cellSpacing="0" cellPadding="0" border="0" width="100%">
        <tbody>
          <tr>
            <td valign="middle" align="left" style={{ padding: "18px 0 18px" }}>
              <table align="left" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td align="left" valign="middle">
                      <a
                        href={`https://astro7.ru/?hash={AUTOLOGIN_HASH}&utm_source=email&utm_medium=${linkSet.letterType}&utm_campaign=${linkSet.letterType === 'letter' ? linkSet.letterDate : linkSet.letterSlogan}&utm_content=navigation&{PIXEL_LETTER_CLICKED}`}
                        style={{textDecoration: "none"}}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://user98023.clients-cdnnow.ru/images/newsletter/mail/2016/permanent/adaptive/action/action-logo-a7.png"
                          style={styleLogo}
                          width="320"
                          height="88"
                          alt="Astro7.ru"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="right"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tbody>
                  <tr>
                    <td
                      height="47"
                      align="left"
                      valign="middle"
                      style={{ lineHeight: "1.1" }}
                    >
                      <a
                        href="tel:{LOCAL_HOTLINE_NUMBER}"
                        value="{LOCAL_HOTLINE_NUMBER}"
                        style={styleHotline}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &#123;LOCAL_HOTLINE_NUMBER&#125;
                      </a>
                      <br />
                      <span style={styleLabel}>звоните круглосуточно</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


