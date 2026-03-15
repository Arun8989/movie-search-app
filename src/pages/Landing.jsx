import { useState } from "react";
import { searchMovies } from "../api/omdb";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";

function Landing() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async (p = 1) => {
    setMovies([]); 
    const data = await searchMovies(query, p);
    if (data.Search) {
      setMovies(data.Search);
      setPage(p);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    handleSearch(1);
  };
  const handleReset = async () => {
    setQuery("");
    setPage(1);
    const data = await searchMovies("", 1);
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div>
      {/* Search Section */}
      <div className="empty_movies">
        <h2>Search Movies</h2>
        <p>Start by typing a movie name above.</p>
      </div>
      <div className="search_section">
        <div className="container">
          <form className="search_form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="submit_btn">Search Now</button>
            <button
              className="reset_btn"
              onClick={handleReset}
            >
              Reset Filter
            </button>
          </form>
        </div>
      </div>

        {movies.length > 0 ? ( 
          <>
          <Pagination page={page} onPageChange={handleSearch} />
            <div className="movie_section">
              <div className="container">
                    <h1 className="section_title">
                      Movie Lists
                    </h1>
                  <div className="row">
                    { movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                      )

                      )}
                  </div>
              </div>
            </div>
            </>
        ):( 
           <div className="empty_state">
            <h2 className="section_title">No Movies Found</h2>
            <p>Try searching with a different keyword.</p>
          </div>
        )}

    </div>
  );
}

export default Landing;
