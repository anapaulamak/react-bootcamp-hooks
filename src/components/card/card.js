import React from 'react';
import './card.styled.css'

export default function Card (props){
  return(
    <div className="card" onClick={props.onClick}>
      <header>{props.title}</header>
      <body>{props.description}</body>
    </div>
  )
}