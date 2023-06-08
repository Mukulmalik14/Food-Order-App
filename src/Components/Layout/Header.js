import React, { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
}

export default Header;
