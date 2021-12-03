import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const movie = props.movie;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="movie"
        height="200"
        image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/movie/${movie.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
