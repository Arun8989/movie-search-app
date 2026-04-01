import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/omdb";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";

function Landing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [movies, setMovies] = useState([]);
<<<<<<< HEAD
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasSearched, setHasSearched] = useState(Boolean(searchParams.get("query")));
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (searchQuery, currentPage) => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      setMovies([]);
      setPage(1);
      setTotalResults(0);
      setHasSearched(false);
      setIsLoading(false);
      return;
=======
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [error, setError] = useState(true);
  
  
  const handleSearch = async (p = 1) => {
    setMovies([]); 
    const data = await searchMovies(query, p,type);
    if(!data.Response){
        setError(true);
    }
    if (data.Search) {
      setMovies(data.Search);
      setPage(p);
>>>>>>> 564ed39175ef19f9683f42851e73d273a042b709
    }

    setIsLoading(true);

    try {
      const data = await searchMovies(trimmedQuery, currentPage);

      if (data.Search) {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults) || 0);
      } else {
        setMovies([]);
        setTotalResults(0);
      }

      setPage(currentPage);
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const searchQuery = searchParams.get("query") || "";
    const currentPage = Number(searchParams.get("page")) || 1;

    setQuery(searchQuery);
    setPage(currentPage);
    fetchMovies(searchQuery, currentPage);
  }, [searchParams]);

  const updateSearchParams = (searchQuery, currentPage) => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({
      query: trimmedQuery,
      page: String(currentPage)
    });
  };

  const handleSubmit = (e) => {
<<<<<<< HEAD
    e.preventDefault();
    updateSearchParams(query, 1);
=======
    setError(false);
    setMovies([]); 
    e.preventDefault(); 
    handleSearch(1);
>>>>>>> 564ed39175ef19f9683f42851e73d273a042b709
  };

  const handlePageChange = (nextPage) => {
    updateSearchParams(searchParams.get("query") || query, nextPage);
  };

  const handleReset = () => {
    setQuery("");
    setMovies([]);
    setPage(1);
<<<<<<< HEAD
    setTotalResults(0);
    setHasSearched(false);
    setSearchParams({});
=======
    const data = await searchMovies("", 1);
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
    setError(true);
>>>>>>> 564ed39175ef19f9683f42851e73d273a042b709
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
            <select id="typeFilter"  value={type} onChange={(e) => setType(e.target.value)}>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
          
            <button type="submit" className="submit_btn">Search Now</button>
            <button
              type="button"
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
          <Pagination
            page={page}
            totalResults={totalResults}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
            <div className="movie_section">
              <div className="container">
<<<<<<< HEAD
                <h1 className="section_title loading_title">
                  Movie Lists
                </h1>
                {isLoading ? (
                  <div className="loading_state_wrapper">
                    <div className="loading_state">
                      <h2>Loading movies...</h2>
                      <p>Please wait while we fetch page {page}.</p>
                    </div>
                  </div>
                ) : (
=======
                    <h1 className="section_title"> Movie Lists
                    </h1>
>>>>>>> 564ed39175ef19f9683f42851e73d273a042b709
                  <div className="row">
                    { movies.map((movie, index) => (
                        <MovieCard key={`${movie.imdbID}-${page}-${index}`} movie={movie} />
                      )

                      )}
                  </div>
                )}
              </div>
            </div>
            </>
<<<<<<< HEAD
        ) : isLoading ? (
          <div className="loading_state">
            <h2 className="section_title">Loading movies...</h2>
            <p>Please wait while we fetch your search results.</p>
          </div>
        ) : hasSearched ? ( 
           <div className="empty_state">
            <h2 className="section_title">No Movies Found</h2>
            <p>Try searching with a different keyword.</p>
          </div>
        ) : null}
=======
        ):( 
           error && (
            <div className="empty_state">
              <h2 className="section_title">No Movies Found</h2>
              <p>Try searching with a different keyword.</p>
            </div>
           )
        )}
>>>>>>> 564ed39175ef19f9683f42851e73d273a042b709

    </div>
  );
}

export default Landing;
