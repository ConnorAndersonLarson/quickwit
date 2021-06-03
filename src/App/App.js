import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from '../Header/Header.js';
import Library from '../Library/Library.js';

function App() {
  const [allArticles, setallArticles] = useState('')



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
