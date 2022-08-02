import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../Components/MovieList";
// this page call api
const Homepage = () => {
  const [popularMovies, setPoppularMovies] = useState([]);
  // API get Popular movie

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const apiResponse = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=14f768a7e0fe1b77e019456dd5ef948b"
        );
        // console.log(apiResponse.data.results);
        setPoppularMovies(apiResponse.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div>
      <MovieList popularMovies={popularMovies} />
    </div>
  );
};

export default Homepage;
