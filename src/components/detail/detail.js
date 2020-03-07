import React from 'react';

export default function CardList (props){


  return(
    <>
      <div className="detail">
        <label> Título: </label>
        <p>{props.title}</p>

        <label> Descrição: </label>
        <p>{props.description}</p>

        <label> Diretor: </label>
        <p>{props.director}</p>

        <label> Produtor: </label>
        <p>{props.producer}</p>

        <label> Data: </label>
        <p>{props.release_date}</p>

        <label> Score: </label>
        <p>{props.rt_score}</p>

      </div>
    </>
  )
}