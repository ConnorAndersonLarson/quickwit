import { Link } from 'react-router-dom';
import './Tile.css';

const Tile = ( { title, author, published, cleanTitle, cleanDate, selectArticle } ) => {


  return(
    <Link to={`/${cleanTitle(title)}`} className="tile" onClick={ event => selectArticle(title)}>
      <h3 className="tileTitle">{title}</h3>
      <h4 className="tileText">{author}</h4>
      <h4 className="tileText">{cleanDate(published)}</h4>
    </Link>
  )
}

export default Tile;
