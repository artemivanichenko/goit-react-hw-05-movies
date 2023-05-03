import { fetchTrending } from 'Api/Api';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrending() {
      try {
        const response = await fetchTrending();
        setMovies(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getTrending();
  }, []);
  return (
    <StyleContainer>
      <StyleTitle>Trending Movies</StyleTitle>
      <StyleGallery>
        {movies &&
          movies.map(movie => (
            <StyleGalleryItem
              key={movie.id}
              to={`/movies/${movie.id}`}
              id={movie.id}
              state={{ from: location }}
            >
              <StyleGalleryImage
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
              />
              <StyleGalleryInfo>{movie.original_title}</StyleGalleryInfo>
            </StyleGalleryItem>
          ))}
      </StyleGallery>
    </StyleContainer>
  );
};

export default Home;

const StyleTitle = styled.h1`
  font-size: 22px;
  text-align: center;
`;
const StyleContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;

const StyleGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  list-style: none;
`;
const StyleGalleryItem = styled(Link)`
  width: 260px;
  height: 180px;
  border-radius: 4px;
  overflow: hidden;
  backdrop-filter: blur(2px);

  transition: transform 250ms cubic-bezier(0.1, 0, 0.1, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(239, 236, 236);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const StyleGalleryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  position: relative;
  color: #ffffff;
`;
const StyleGalleryInfo = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.1428571429;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background-color: rgba(47, 48, 58, 0.8);
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: -10%;
  padding-bottom: 10px;
  padding-top: 10px;
`;
