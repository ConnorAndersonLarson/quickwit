import './Library.css';

const Library = ( { articles } ) => {
  const allTiles = articles.map(art => {
    return(
      <Tile
        title={art.title}
        author={art.byline}
        published={art.published_date}
        img={art.multimedia[0]}
      />
    )
  })


  return(
    <div className="library">

    </div>
  )
}

export default Library;
