import { fetchMovieById } from 'Api/Api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [date, setDate] = useState('');
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  // console.log(location);
  const backLinkHref = location.state?.from ?? '/333';
  const PosterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  useEffect(() => {
    async function getMovieById() {
      try {
        const response = await fetchMovieById(id);
        setMovie(response.data);
        setGenres(response.data.genres);
        setDate(response.data.release_date.split('-')[0]);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieById();
  }, [id]);
  return (
    <StyleContainer>
      <Link to={backLinkHref}>Go back</Link>
      <StyleMovieItem>
        <div>
          <img src={`${PosterUrl}`} alt={`${movie.title}`} />
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
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </StyleContainer>
  );
};
export default MovieDetails;

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
  list-style: none;
  margin-top: 20px;
`;
