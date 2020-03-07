import React from 'react';
import logo from '../../logo.png'

export default function Header (){
  return(
    <div>
      <img src={logo} alt='logo' style={{marginTop: '20px'}}/>
    </div>
  )
}