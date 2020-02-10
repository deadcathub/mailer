import React from "react";

export const BlockBtn = props => {
  const styleButton = {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "1.5",
    textAlign: "center",
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: ".1em",
    color: "#ffffff",
    backgroundColor: "#f85160",
    padding: "17px 30px",
    borderRadius: "6px",
    display: "inline-block"
  };

  return (
    <div className="js-block" style={{ textAlign: "center", marginTop: "30px" }} onClick={props.toggleDrawer('bottom', true)}>
      <a
        href={props.apptree.btn.link}
        style={styleButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.apptree.btn.text}
      </a>
    </div>
  );
};


