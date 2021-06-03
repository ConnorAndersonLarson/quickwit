import './Tile.css';

const Tile = ( { title, author, published } ) => {

  const cleanDate = () => {
    return published.substr(0,10)
  }


  return(
    <section className="tile">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <h4>{cleanDate()}</h4>
    </section>
  )
}

export default Tile;
