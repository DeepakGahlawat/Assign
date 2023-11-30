import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Form from "../components/form/Form";
import classes from "./Home.module.css";
import axios from "axios";
import Filter from "../components/filters/Filter";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [page, setPage] = useState(1);

  useEffect(() => {
    const getCharcters = async () => {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    };
    getCharcters();
  }, []);

  useEffect(() => {
    handleClick();
    handleFilter();
  }, [page]);
  //console.log(data);

  const handleClick = async () => {
    
  };
  const handleFilter = async () => {
    if (status === "" && gender === "" && species === "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    if (status !== "" && gender === "" && species === "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&status=${status}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    if (status === "" && gender !== "" && species === "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&gender=${gender}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    if (status === "" && gender === "" && species !== "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&species=${species}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    if (status !== "" && gender !== "" && species === "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&status=${status}&gender=${gender}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    if (status !== "" && gender === "" && species !== "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&status=${status}&species=${species}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    
    if (status === "" && gender !== "" && species !== "") {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&gender=${gender}&species=${species}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
    else {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&search=${search}&status=${status}&gender=${gender}&species=${species}`
        );
        const response = res.data.results;
        setData(response);
      } catch (error) {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    } 
  
    
    
  };

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      const isScrollingDown =
        document.documentElement.scrollTop > lastScrollTop;

      if (
        (isScrollingDown &&
          window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight) ||
        (!isScrollingDown && document.documentElement.scrollTop === 0)
      ) {
        setPage((prev) => prev + (isScrollingDown ? 1 : -1));
      }

      lastScrollTop = document.documentElement.scrollTop;
    } catch (error) {
      console.log(error);
    }
  };

  let lastScrollTop = 0;

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div>
      <Navbar />
     

      <Filter
        status={status}
        gender={gender}
        species={species}
        updateStatus={updateStatus}
        updateGender={updateGender}
        updateSpecies={updateSpecies}
        handleFilter={handleFilter}
      />
      <div className={classes.cardContainer}>
        {data.map((item) => {
          return <Card page="/" item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
