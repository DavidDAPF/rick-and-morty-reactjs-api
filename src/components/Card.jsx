import React from 'react'
import '../styles/Card.css'

const Card = (data) => {
  return (
    <div className='card-main' >
      <div  className='card-contain' key={data.id}>
        <img src={data.image} alt={data.name}/>
        <div className='card-data'>
        <p>Name: {data.name}</p>
        <p>Status: {data.status}</p>
        <p>{`Origen:${data.origin && data.origin.name}`}</p>
        </div>
      </div> 
    </div>
  )
}

export default Card;
