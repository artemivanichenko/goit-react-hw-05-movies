import { fetchMovieById } from 'Api/Api';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MovieDetails } from './MovieDetails';
// import { useParams } from 'react-router-dom';

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [date, setDate] = useState('');
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovieById() {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response.data);
        setGenres(response.data.genres);
        setDate(response.data.release_date.split('-')[0]);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieById();
  }, [movieId]);
  console.log(genres);
  return (
    <StyleContainer>
      <Link to={backLinkHref}>Go back</Link>
      <StyleMovieItem>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} movie poster`}
          />
        </div>
        <div>
          <StyleTitle>
            {movie.title}({date})
          </StyleTitle>
          <StyleText>User Score: {movie.vote_average}</StyleText>
          <StyleSecondTitle>Overview</StyleSecondTitle>
          <StyleText>{movie.overview}</StyleText>
          <StyleSecondTitle>Genres</StyleSecondTitle>
          <p>{genres.map(genre => genre.name).join(', ')}</p>{' '}
        </div>
      </StyleMovieItem>
      <div>
        <Link to="cast">Cast</Link>
        <p>Reviews</p>
      </div>
    </StyleContainer>
  );
};

const StyleTitle = styled.h1`
  font-size: 22px;
`;
const StyleSecondTitle = styled.h2`
  font-size: 18px;
`;
const StyleText = styled.p`
  font-size: 12px;
`;
const StyleContainer = styled.div`
  max-width: 1200px;
  margin: 40px;
`;

const StyleMovieItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  /* flex-wrap: wrap; */
  list-style: none;
  margin-top: 20px;
`;
