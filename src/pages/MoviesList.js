import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { LinearProgress, OutlinedInput } from "@mui/material";
import MovieItem from "../components/MoviesItem";
import { apiKey } from "../config";

const MoviesList = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchMovie, setSearchMovie] = useState("");

  const searchResult = useMemo(() => {
    if (!searchMovie) return results;

    return results.filter((m) =>
      m.original_title.toLowerCase().includes(searchMovie.toLowerCase())
    );
  }, [searchMovie, results]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => setResults(res.data.results))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (event) => {
    setSearchMovie(event.target.value);
  };

  if (isLoading) return <LinearProgress />;

  return (
    <>
      <div
        style={{ display: "grid", placeItems: "center", margin: "1rem 0.5rem" }}
      >
        <OutlinedInput
          style={{ width: "100%" }}
          type="text"
          placeholder="Titles"
          value={searchMovie}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          margin: "1rem",
        }}
      >
        {searchResult.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
