// InputGroup.js

import React from "react";
import classes from './InputGroup.module.css';

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className={classes["input-group"]}>
      <select
        onChange={(e) => changeID(e.target.value)}
        className={classes["form-select"]}
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1} key={index}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
