import React, { useState } from "react";
import MovieItem from "../MovieItem";

const MovieList = (props) => {
  const { popularMovies } = props;
  console.log(popularMovies);
  const [data, setData] = useState();
  // const empty = <h3>empty data</h3>;
  return (
    <div>
      {popularMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
