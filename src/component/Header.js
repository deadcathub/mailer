import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

export const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            <Button variant="contained" color="primary">
              Main
            </Button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            <Button variant="contained" color="primary">
              About
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
