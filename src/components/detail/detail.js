import React, { useState, useEffect }  from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"
import './detail.styled.css'


export default function Detail (props){
  const [item, setItem] = useState([])
  let {id} = useParams();
  let history = useHistory();

  useEffect(() => {
    const matchId = {id}
    axios
      .get(`https://ghibliapi.herokuapp.com/films/${matchId.id}`)
      .then(({ data }) => {
        setItem(data);
      })
      .catch(function(err) {
        console.error(err);
      })
  },[]);

  return(
    <>
      <div className="detail" >
        <h1>Detalhes do filme</h1>

        <ul className='infos'>
            <li>
              <label> Título: </label>
              <label>{item.title}</label>
            </li>
            <li>
              <label> Descrição: </label>
              <label>{item.description}</label>
            </li>
            <li>
              <label> Descrição: </label>
              <label>{item.director}</label>
            </li>
            <li>
              <label> Produtor: </label>
              <label>{item.director}</label>
            </li>
            <li>
              <label> Data: </label>
              <label>{item.release_date}</label>
            </li>
            <li>
              <label> Score:  </label>
              <label>{item.rt_score}</label>
            </li>
          </ul>

        <button onClick={() => history.goBack()} > Voltar </button>
      </div>
    </>
  )
}