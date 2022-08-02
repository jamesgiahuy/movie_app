import React from "react";

const MovieItem = (props) => {
  const { backdrop_path, title, poster_path } = props.movie;
  return (
    <div
      className="movieItem"
      style={{
        backgroundImage: `url(${backdrop_path})`,
      }}
    >
      <h3>{title}</h3>
      {/* <img
        src="https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg "
        alt="#"
      ></img> */}
    </div>
  );
};

export default MovieItem;
