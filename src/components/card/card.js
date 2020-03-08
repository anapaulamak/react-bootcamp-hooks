import React from 'react'
import './card.styled.css'
import {Link} from 'react-router-dom'

export default function Card (props){
  return(
    <Link className="card" to={props.to} onClick={props.onClick}>
      <header>{props.title}</header>
      <body>{props.description}</body>
    </Link>
  )
}