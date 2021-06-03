import { Link } from 'react-router-dom';
import './Tile.css';

const Tile = ( { title, author, published, cleanTitle, cleanDate, selectArticle } ) => {


  return(
    <Link to={`/${cleanTitle(title)}`} className="tile" onClick={ event => selectArticle(title)}>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <h4>{cleanDate(published)}</h4>
    </Link>
  )
}

export default Tile;
