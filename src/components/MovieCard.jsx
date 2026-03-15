import { useNavigate } from "react-router-dom";

function MovieCard({ movie }){

const navigate = useNavigate();

return(

<div className="col-md-4">

<div className="movie_card">

<img src={movie.Poster} alt={movie.Title}/>

<h3>{movie.Title}</h3>

<button
onClick={()=>navigate(`/movie/${movie.imdbID}`)}
>
View Movie Details
</button>

</div>

</div>

);

}

export default MovieCard;