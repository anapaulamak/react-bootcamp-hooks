import React, { useState, useEffect }  from 'react';
import axios from "axios";

export default function Detail (props){
  const [item, setItem] = useState([])

  useEffect(() => {
    let movie_id = '2baf70d1-42bb-4437-b551-e5fed5a87abe';

    axios
      .get(`https://ghibliapi.herokuapp.com/films/${movie_id}`)
      .then(({ data }) => {
        setItem(data);
      })
      .catch(function(err) {
        console.error(err);
      })
  },[]);

  return(
    <>
      <div className="detail">
        <label> Título: </label>
        <p>{item.title}</p>

        <label> Descrição: </label>
        <p>{item.description}</p>

        <label> Diretor: </label>
        <p>{item.director}</p>

        <label> Produtor: </label>
        <p>{item.producer}</p>

        <label> Data: </label>
        <p>{item.release_date}</p>

        <label> Score: </label>
        <p>{item.rt_score}</p>

      </div>
    </>
  )
}