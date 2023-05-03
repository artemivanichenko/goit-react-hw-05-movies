import { fetchMovieByName } from 'Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
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
    // console.log(e.target.elements.searchQuery.value);
    e.target.reset();
  };
  // const handleInput = e => {
  //   setSearchParams(e.target.value.toLowerCase());
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" />
        <button type="submit">Search</button>
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
