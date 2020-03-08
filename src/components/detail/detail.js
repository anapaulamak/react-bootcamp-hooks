import React, { useState, useEffect }  from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"
import './detail.styled.css'
import Loader from 'react-loader-spinner'

export default function Detail (props){
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(false)
  let {id} = useParams();
  let history = useHistory();

  useEffect(() => {
    setLoading(true)
    
    const matchId = {id}
    axios
      .get(`https://ghibliapi.herokuapp.com/films/${matchId.id}`)
      .then(({ data }) => {
        setLoading(false)
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

        {loading ?
        <Loader type="Oval" color="#655b5b" height={50} width={50}/>
        :
        <>
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
        </>
        }
      </div>
    </>
  )
}