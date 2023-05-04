import { fetchMovieByName } from 'Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const searchQuery = searchParams.get('searchQuery');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) return;
    async function getMovieByName() {
      try {
        const response = await fetchMovieByName(searchQuery);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieByName();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ searchQuery: e.target.elements.searchQuery.value });
    e.target.reset();
    setBtnDisabled(!btnDisabled);
  };
  const handleInput = e => {
    const value = e.target.value.trim();
    setBtnDisabled(!value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" onChange={handleInput} />
        <button type="submit" disabled={btnDisabled}>
          Search
        </button>
      </form>
      {movies.length ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Enter movie name </p>
      )}
    </>
  );
};

export default Movies;
