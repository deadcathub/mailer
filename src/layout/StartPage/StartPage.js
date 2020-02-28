import React from "react";
import Button from "@material-ui/core/Button";
import "./StartPage.scss";

export const StartPage = props => {
  return (
    <div className="StartPage">
      {props.letterData.map((item, index) => {
        // console.log(index);
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
      })}
    </div>
  );
};
