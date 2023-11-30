




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardDetails from '../components/card/CardDetails';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css'; // Import module CSS
 

const Detail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const response = res.data;
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCharacters();
  }, [id]);

  return (
    <div className={styles.container}>
      {/* Your Detail component content */}
      <CardDetails data={data} />
    </div>
  );
};

export default Detail;
