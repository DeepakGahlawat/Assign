import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import InputGroup from "../components/filters/InputGroup";
import Navbar from "../components/navbar/Navbar";
import styles from "./Location.module.css";


const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div>
        <h1 className={styles.heading}>
          Location :{name === "" ? "Unknown" : name}
        </h1>
        <h5 className={styles.subheading}>
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className={styles.subheading}>Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div>
        <div className={styles.picklocation}>
          <h4>Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className={styles.cardcontainer}>
          {results.map((item) => (
            <div key={item.id} className={styles.card}>
              <Card page="/episodes/" item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;