import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { apiKey } from "../config";

const MovieInfo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMoive] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((res) => setMoive(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <LinearProgress />;

  const countries = movie.production_countries.map((m) => m.name).join(", ");
  const genres = movie.genres.map((m) => m.name).join(", ");
  const tagline = movie.tagline;

  return (
    <>
      <div style={{ display: "grid", placeItems: "center" }}>
        <h1 style={{ fontFamily: "Cinzel", color: "gray" }}>
          {movie.original_title}
        </h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
        />
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="text-feedback"
            value={movie.vote_average}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            max={10}
          />
          <Box sx={{ ml: 2 }}>Imdb{movie.vote_average}</Box>
        </Box>
        {countries && <p>Countries: {countries}</p>}
        {genres && <p>Genres: {genres}</p>}
        {tagline && <p style={{ fontWeight: "bold" }}>Tagline: {tagline}</p>}
        <p>Language: {movie.original_language} </p>
        <p style={{ margin: "1rem 2rem", fontStyle: "italic" }}>
          {movie.overview}
        </p>
      </div>
    </>
  );
};

export default MovieInfo;
