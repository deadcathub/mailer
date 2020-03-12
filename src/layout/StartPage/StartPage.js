import React from "react";
import Button from "@material-ui/core/Button";
import "./StartPage.scss";

export const StartPage = props => {
  const a = props.letterData.map((item, index) => {
    return (
      <Button
        size="large"
        onClick={() => {
          props.setDataSet(index);
        }}
        color="primary"
        variant="contained"
        key={index}
      >
        {item["letterName"]}
      </Button>
    );
  });

  return <div className="StartPage">{a}</div>;
};
