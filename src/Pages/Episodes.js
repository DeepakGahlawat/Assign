// Episodes.js

import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import InputGroup from "../components/filters/InputGroup";
import classes from "./Episodes.module.css";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const Episodes = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState({});
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);

        let a = await Promise.all(
          data.characters.map((x) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setResults(a);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [api]);

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.header}>
        <h1>Episode name: {name === "" ? "Unknown" : name}</h1>
        <h5>Air Date: {air_date === "" ? "Unknown" : air_date}</h5>
      </div>
      <div className={classes.form}>
        <div className={classes.episodeDetails}>
          <div>
            <h4>Pick Episode</h4>
            <InputGroup name="Episode" changeID={setID} total={51} />
          </div>
        </div>
      </div>
      <div>
        <div className={classes.card}>
          {results.map((item) => {
            return <Card page="/episodes/" item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
