import React, { useState, useEffect } from 'react';
import Card from '../card/card';

export default function Details (props){
  console.log(items[0])

  return(
    <div>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.director}</p>
      <p>{item.release_date}</p>
      <p>{item.rt_score}</p>
    </div>
  )
}