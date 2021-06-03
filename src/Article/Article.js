import { Link } from 'react-router-dom';
import './Article.css';

const Article = ( {article, cleanDate} ) => {

  return(
    <section className="article">
      <h2 className="artTitle">{article.title}</h2>
      <div className="artBox">
        <h3 className="artAuthor">{article.byline}</h3>
        <h3 className="artDate">Published: {cleanDate(article.published_date)}</h3>
      </div>
      <p className="artAbst">{article.abstract}</p>
      {!!article.multimedia[0] &&
        <figure>
          <img src={article.multimedia[0].url} className="artPic" alt="caption attached"/>
          <figcaption className="artCap">{article.multimedia[0].caption}</figcaption>
        </figure>
      }
      <div className="buttons">
        <Link to='/' className="artBut">Return Home</ Link>
        <a href={article.url} className="artBut" target="_blank" rel="noreferrer">Read Full Article</a>
      </div>
    </section>
  )
}

export default Article;
