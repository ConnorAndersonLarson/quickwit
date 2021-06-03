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

  const cleanDate = (thisDate) => {
    if (thisDate) {
      return thisDate.substr(0,10)
    }
  }

  const selectArticle = (title) => {
    const thisArticle = allArticles.find(art => cleanTitle(art.title) === cleanTitle(title));
    setArticle(thisArticle)
  }

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Switch>
          <Route exact path="/">
            <Library articles={allArticles} cleanTitle={cleanTitle} cleanDate={cleanDate} selectArticle={selectArticle}  error={error} />
          </ Route>
          <Route exact path="/:title" render={({ match }) => {
            const clickedArticle = allArticles.find(art => cleanTitle(art.title) === cleanTitle(match.params.title));
            return(
              <Article article={article} cleanDate={cleanDate} />
            )
          }} />
        </ Switch>
      </div>
    </div>
  );
}

export default App;
