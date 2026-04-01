import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/omdb";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";

function Landing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [movies, setMovies] = useState([]);
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
    e.preventDefault();
    updateSearchParams(query, 1);
  };

  const handlePageChange = (nextPage) => {
    updateSearchParams(searchParams.get("query") || query, nextPage);
  };

  const handleReset = () => {
    setQuery("");
    setMovies([]);
    setPage(1);
    setTotalResults(0);
    setHasSearched(false);
    setSearchParams({});
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

    </div>
  );
}

export default Landing;
