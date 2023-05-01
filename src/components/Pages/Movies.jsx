import { fetchTrending } from 'Api/Api';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieDetails } from './MovieDetails';
// import { useParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState('');
  const [page, setPage] = useState(1);
  //   const { movieId } = useParams();
  useEffect(() => {
    async function getTrending() {
      try {
        const response = await fetchTrending(page);
        if (page === 1) {
          setMovies(e => [...response.data.results]);
        } else setMovies(e => [...e, ...response.data.results]);
        // console.log(response);
        setMovies(response.data.results);
        setTotalPage(response.data.total_pages);
      } catch (error) {
        console.log(error.message);
      }
    }
    getTrending();
  }, [page]);
  return (
    <StyleContainer>
      <StyleTitle>Trending Movies</StyleTitle>
      <StyleGallery>
        {movies &&
          movies.map(
            ({
              id,
              backdrop_path,
              original_title,
              popularity,
              release_date,
            }) => (
              <MovieDetails
                release_date={release_date}
                key={`${id}`}
                id={id}
                backdrop_path={backdrop_path}
                target="_blank"
                rel="noreferrer noopener"
                original_title={original_title}
                popularity={popularity}
              />
            )
          )}
      </StyleGallery>
    </StyleContainer>
  );
};
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
