import React from 'react'
import Card from '../card/card'
import './cardList.styled.css'

export default function CardList (props){


  return(
    <>
      <div className="list">
        {props.items.map((item) => 
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            to={`/${item.id}`}
          />
        )}
      </div>
    </>
  )
}