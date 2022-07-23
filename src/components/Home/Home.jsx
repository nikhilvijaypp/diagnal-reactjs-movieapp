import React, { useEffect } from "react";

// import MovieListing from "../MovieListing/MovieListing";
const MovieListing = React.lazy(() => import("../MovieListing/MovieListing"));

function Home() {
  return (
    <div className="home">
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
