import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import {
  fetchAsyncMovies,
  getAllMovies,
  getsearchTerm,
} from "../../features/Movies/movieSlice";

import "./MovieListing.scss";

function MovieListing() {
  const PAGE_NUMBER = 1;
  const dispatch = useDispatch();
  const searchTerm = useSelector(getsearchTerm);
  const movieList = useSelector(getAllMovies);
  let renderMovies = "";
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    dispatch(fetchAsyncMovies(page));
  }, [dispatch, page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {movieList?.map((movie, idx) => {
            return <MovieCard key={idx} data={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
