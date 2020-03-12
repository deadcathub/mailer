import React from "react";

export const FactoidOne = props => {
  const { letterTree } = props.appState;

  switch (letterTree["factoidOne"]) {
    case "rub":
      return (
        <div
          block-id={props.index}
          style={{
            fontSize: 0,
            margin: "30px 0 35px",
            padding: 0,
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;5000&thinsp;₽&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              6000&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                ₽
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;3000&thinsp;₽&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              3600&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                ₽
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;1000&thinsp;₽&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              1200&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                ₽
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case "usd":
      return (
        <div
          block-id={props.index}
          style={{
            fontSize: 0,
            margin: "30px 0 35px",
            padding: 0,
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;100&thinsp;$&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              120&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                $
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;50&thinsp;$&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              60&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                $
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;20&thinsp;$&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              24&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                $
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case "eur":
      return (
        <div
          block-id={props.index}
          style={{
            fontSize: 0,
            margin: "30px 0 35px",
            padding: 0,
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;100&thinsp;€&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              120&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                €
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;50&thinsp;€&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              60&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                €
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "inline-block",
              maxWidth: "33%",
              minWidth: "210px",
              verticalAlign: "top"
            }}
          >
            <table cellSpacing="0" cellPadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "5px 0" }}>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                      style={{ fontSize: "14px", textAlign: "left" }}
                    >
                      <tbody>
                        <tr>
                          <td align="center">
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "16px",
                                lineHeight: "normal",
                                color: "#222222",
                                textDecoration: "line-through",
                                fontWeight: "normal",
                                marginRight: "5px"
                              }}
                            >
                              &nbsp;20&thinsp;€&nbsp;
                            </b>
                            <b
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: "32px",
                                fontWeight: "normal",
                                lineHeight: "normal",
                                color: "#3a3a3a"
                              }}
                            >
                              24&thinsp;
                              <span
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "32px",
                                  fontWeight: "normal",
                                  lineHeight: "normal",
                                  color: "#3a3a3a"
                                }}
                              >
                                €
                              </span>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    default:
      return null;
  }
};
