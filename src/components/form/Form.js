import React from "react";
import classes from "./Form.module.css";

const Form = ({ setSearch, handleClick }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Characters</h1>
      <div className={classes.form}>
        <input
          type="text"
          name=""
          id=""
          onChange={handleChange}
          className={classes.text}
          placeholder="search by name"
        />
        <button className={classes.searchbutton} onClick={()=>{handleClick()}}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Form;
