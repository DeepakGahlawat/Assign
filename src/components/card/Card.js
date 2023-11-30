

import React from "react";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ page, item }) => {
  return (
    <div className={classes.characterCard}>
      <NavLink to={`/character/${item.id}`} activeClassName={classes.active}>
        <img
          src={item.image === null ? item.url : item.image}
          alt={`${item?.name} portrait`}
          className={classes.characterImage}
        />

        <div className={classes.characterDetails}>
          <h2>{item?.name}</h2>
        </div>

        <div className={classes.locationDetails}>
          <h3>last location</h3>
          <p>{item?.location?.name}</p>
        </div>

        <div>{item?.status}</div>
      </NavLink>
    </div>
  );
};

export default Card;


