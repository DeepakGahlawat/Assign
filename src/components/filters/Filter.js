import React from "react";
import classes from "./Filter.module.css";

const Filter = (
 { gender,
  Species,
  status,
  updateGender,
  updateSpecies,
  updateStatus,
  handleFilter
 }
) => {

  const clearHandler = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
  };
  const handleStatusChange = (event) => {
    updateStatus(event.target.value);
    handleFilter();
  };

  const handleSpeciesChange = (event) => {
    updateSpecies(event.target.value);
    handleFilter();
  };

  const handleGenderChange = (event) => {
    updateGender(event.target.value);
    handleFilter();
  };
  return (
    <div className={classes.container}>
      <div className={classes.div}>
        <div className={classes.flex_item}>
        <label className={classes.label}>
          Status:
          <select
            className={classes.select}
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Select...</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </label>
        </div>
        

        <div className={classes.flex_item}>
        <label className={classes.label}>
          Species:
          <select
            className={classes.select}
            value={Species}
            onChange={handleSpeciesChange}
          >
            <option value="">Select...</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Mythological">Mythological</option>
            <option value="Unknown">Unknown</option>
            <option value="Anima">Animal</option>
            <option value="Disease">Disease</option>
            <option value="Robot">Robot</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Planet">Planet</option>
          </select>
        </label>
        </div>

        <div className={classes.flex_item}>
        <label className={classes.label}>
          Gender:
          <select
            className={classes.select}
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="">Select...</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknowm">Unknowm</option>
          </select>
        </label>
        </div>

        <button className={classes.button} onClick={clearHandler}>Clear Filter</button>

        {/* You can use the selected values (category, type, rating) for filtering your data */}
        {/* Add your data filtering logic here */}
      </div>
    </div>
  );
};

export default Filter;
