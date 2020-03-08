import React, { useState, useEffect }   from 'react'
import axios from "axios";
import Header from './components/header/header'
import CardList from './components/cardList/cardList'
import Detail from './components/detail/detail'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner'

function App(props) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(({ data }) => {
        setLoading(false)
        setItems(data);
      })
      .catch(function(err) {
        console.error(err);
      })
  },[]);
  
  return (
    <div className="App">
      <Header />
      {loading ?
        <Loader type="Oval" color="#655b5b" height={50} width={50}/>
        :
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
      }
    </div>
  )
}

export default App
