
import React from 'react'
import classes from './CardDetails.module.css'

const CardDetails = ({data}) => {
    console.log(data);
  return (
    <div className={classes.full}>
    <div className={classes.cardcontainer}>
      <h1>{data?.name}</h1>
      <img src={data?.image} alt="" />
      <p>{data?.status}</p>
      <p>
        <strong>Gender : </strong>{data?.gender}
      </p>
      <p>
        <strong>Species : </strong>{data?.species}
      </p>
      <p>
        <strong>Location : </strong>{data?.location.name}
      </p>
      <p>
        <strong>Type : </strong>{data?.type}
      </p>
      <p>
        <strong>Origin : </strong>{data?.origin.name}
      </p>
      <p>
        <strong>Episodes the character is featured in : </strong>{data?.episode.length}
      </p>
      {data?.episode && data?.episode?.length > 0 ? (
              <ul>
                {data?.episode.map((ep, index) => (
                  <li key={index}>{ep.split("/").pop()}</li>
                ))}
              </ul>
            ) : (
              "No episodes available"
            )}
    </div>
    </div>
  )
}

export default CardDetails
