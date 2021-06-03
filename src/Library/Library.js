import Tile from '../Tile/Tile.js';
import './Library.css';


const Library = ( { articles } ) => {
  const allTiles = articles.map((art, i) => {
    return(
      <Tile
        key={i}
        title={art.title}
        author={art.byline}
        published={art.published_date}
      />
    )
  })


  return(
    <div className="library">
      {allTiles}
    </div>
  )
}

export default Library;
