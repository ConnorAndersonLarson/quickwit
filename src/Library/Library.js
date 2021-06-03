import Tile from '../Tile/Tile.js';
import './Library.css';


const Library = ( { articles, error } ) => {
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
      {!error && allTiles}
      {!!error && <h2>It seems we have lost our wit</h2>}
    </div>
  )
}

export default Library;
