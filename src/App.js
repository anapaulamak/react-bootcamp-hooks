import React, { useState, useEffect }   from 'react'
import axios from "axios";
import Header from './components/header/header'
import CardList from './components/cardList/cardList'
import Detail from './components/detail/detail'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App(props) {
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
  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/list'>
            <CardList items={items} />
          </Route>
          <Route path='/:id' >
            <Detail />
          </Route >
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
