import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { getArticles } from '../apiCall.js';
import './App.css';
import Header from '../Header/Header.js';
import Library from '../Library/Library.js';

function App() {
  const [allArticles, setAllArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(async () => {
    getArticles()
      .then(response => response.json())
      .then(art => {
        if ( art.status === 'OK') {
          setAllArticles(art.results)
        } else {
          setError('There seems to be a problem...')
        }})
      .catch(err=> setError('There seems to be a problem...'))
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Switch>
          <Route exact path="/" render={() => <Library />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
