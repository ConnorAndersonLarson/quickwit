import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { getArticles } from '../apiCall.js';
import './App.css';
import Header from '../Header/Header.js';
import Library from '../Library/Library.js';
import Article from '../Article/Article.js';

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      getArticles()
        .then(response => response.json())
        .then(art => {
          if ( art.status === 'OK') {
            setAllArticles(art.results)
          } else {
            setError('There seems to be a problem...')
          }})
        .catch(err=> setError('There seems to be a problem...'))
    }
    getData();
  }, [])

  const cleanTitle = (title) => {
    return title.split(/[\s,'".]+/).join('')
  }

  const selectArticle = (title) => {
    const thisArticle = allArticles.find(art => art.title === title);
    setArticle(thisArticle);
  }

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Switch>
          <Route exact path="/:title" render={({ match }) => {
            const clickedArticle = allArticles.find(art => cleanTitle(art.title) === cleanTitle(match.params.title));
            return(
              <Article article={allArticles[0]} />
            )
          }} />
          <Route exact path="/">
            <Library articles={allArticles} cleanTitle={cleanTitle} selectArticle={selectArticle} error={error} />
          </ Route>
        </ Switch>
      </div>
    </div>
  );
}

export default App;
