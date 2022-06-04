import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { imdbId } = useParams();
  console.log(imdbId);

  return <h1>Movie Details page</h1>;
}

export default MovieDetail;
