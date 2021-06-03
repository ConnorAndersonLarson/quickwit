import './Sort.css';

const Sort = ( { filterData } ) => {



  return(
    <section className="sortButtons" onChange={(event) => filterData(event.target.id)}>
      <div className="radBox">
        <input type="radio" id="home" name="sort" value="home" />
        <label htmlFor="home">All</label>
      </div>
      <div className="radBox">
        <input type="radio" id="arts" name="sort" value="arts" />
        <label htmlFor="arts">Arts</label>
      </div>
      <div className="radBox">
        <input type="radio" id="us" name="sort" value="us" />
        <label htmlFor="us">U.S.</label>
      </div>
      <div className="radBox">
        <input type="radio" id="world" name="sort" value="world" />
        <label htmlFor="world">World</label>
      </div>
      <div className="radBox">
        <input type="radio" id="politics" name="sort" value="politics" />
        <label htmlFor="politics">Politics</label>
      </div>
      <div className="radBox">
        <input type="radio" id="movies" name="sort" value="movies" />
        <label htmlFor="movies">Movies</label>
      </div>
      <div className="radBox">
        <input type="radio" id="technology" name="sort" value="technology" />
        <label htmlFor="technology">Tech</label>
      </div>
    </section>
  )
}

export default Sort;
