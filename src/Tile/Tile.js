import './Tile.css';

const Tile = ( { title, author, published } ) => {

  return(
    <section className="tile">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <h4>{published}</h4>
    </section>
  )
}

export default Tile;
