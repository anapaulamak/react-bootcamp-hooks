import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import axios from "axios";
import './cardList.styled.css'

export default function CardList (props){
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(function(err) {
        console.error(err);
      })
  },[]);

  const showDetails = (item) => {
    return item.id;
  }

  return(
    <div className="list">
      {items.map(item => 
        <Card 
          title={item.title}
          description={item.description}
          onClick={() => showDetails(item)}
        />
      )}
    </div>
  )
}