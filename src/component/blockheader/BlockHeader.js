import React from "react";

export const BlockHeader = props => {
  const propsTree = props.blockTree;

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
      href={propsTree.banner.link}
      onClick={e => {
        props.setBlockType("header");
        props.toggleDrawer("bottom", true)(e);
      }}
    >
      <table cellSpacing="0" cellPadding="0" border="0" width="100%">
        <tbody>
          <tr>
            <td valign="middle" align="left" style={{ padding: "18px 0 18px" }}>
              <table align="left" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td align="left" valign="middle">
                      <a href={ `https://astro7.ru/?hash=&lbrace;AUTOLOGIN_HASH&rbrace;&utm_source=email&utm_medium=${props.linkSet.letterType}&utm_campaign=bla-bla-bla&utm_content=navigation&&lbrace;PIXEL_LETTER_CLICKED&rbrace;` } style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        <img src="https://user98023.clients-cdnnow.ru/images/newsletter/mail/2016/permanent/adaptive/action/action-logo-a7.png" style={styleLogo} width="320" height="88" alt="Astro7.ru"/>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="right" cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td height="47" align="left" valign="middle" style={{ lineHeight: "1.1" }}>
                      <a href="88001000781" style={styleHotline} target="_blank" rel="noopener noreferrer">
                        +7 800 100-07-81
                      </a>
                      <br />
                      <span style={styleLabel}>
                        звоните круглосуточно
                      </span>
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


