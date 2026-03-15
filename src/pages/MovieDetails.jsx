import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api/omdb";

function MovieDetails(){

  const { id } = useParams();
  const navigate = useNavigate();

  const [movie,setMovie] = useState(null);

  useEffect(()=>{

    const fetchMovie = async ()=>{

      const data = await getMovieDetails(id);

      setMovie(data);

    };

    fetchMovie();

  },[id]);

  if(!movie){
    return <h2 style={{textAlign:"center"}}>Loading...</h2>;
  }

  return(

    <div className="movie_details_section">

  <div className="container">

    <div className="movie_details_card">

      {/* Movie Poster */}
      <div className="movie_poster">

        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          onError={(e) => {
            e.target.src = "/no-image.png";
          }}
        />

      </div>


      {/* Movie Information */}
      <div className="movie_info">

        <h1 className="movie_title">
          {movie.Title}
        </h1>

        <p className="movie_year">
          <strong>Year:</strong> {movie.Year}
        </p>

        <p className="movie_genre">
          <strong>Genre:</strong> {movie.Genre}
        </p>

        <p className="movie_director">
          <strong>Director:</strong> {movie.Director}
        </p>

        <p className="movie_actors">
          <strong>Actors:</strong> {movie.Actors}
        </p>

        <p className="movie_plot">
          <strong>Plot:</strong> {movie.Plot}
        </p>

        <p className="movie_rating">
          ⭐ IMDb Rating: {movie.imdbRating}
        </p>


        <button
          className="back_btn"
          onClick={() => navigate("/")}
        >
          Back to Movies
        </button>

      </div>

    </div>

  </div>

</div>

  );

}

export default MovieDetails;