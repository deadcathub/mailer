import React from "react";
import Button from "@material-ui/core/Button";
import "./Header.scss";

export const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_list">
        <li className="navbar_item">
          <Button variant="contained" color="primary">
            Главная
          </Button>
        </li>
        <li className="navbar_item">
          <Button variant="contained" color="primary">
            О проекте
          </Button>
        </li>
      </ul>
    </nav>
  );
};


