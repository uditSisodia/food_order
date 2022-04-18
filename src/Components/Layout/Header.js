import React from "react";

import mealsImage from "../../Assets/mealsImage.jpg";

import classes from "./Header.module.css";

import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full of meals"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
