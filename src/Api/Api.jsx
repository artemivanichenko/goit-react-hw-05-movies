import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '36c5240e9c1d76f3ef284d0cb20db05d';

export const fetchTrending = page => {
  return axios.get(
    `${baseURL}trending/all/day?api_key=${API_KEY}&page=${page}&language=en-US`
  );
};
export const fetchMovieById = id => {
  return axios.get(
    `
${baseURL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};
// export const fetchMovieById = id => {
//   return axios
//     .get(
//       `
// ${baseURL}movie/${id}?api_key=${API_KEY}&language=en-US`
//     )
//     .then(response => response.data);
// };
export const fetchCreditsById = id => {
  return axios.get(
    `${baseURL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};
export const fetchReviewsById = id => {
  return axios.get(
    `${baseURL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
};
export const fetchMovieByName = keyword => {
  return axios.get(`
${baseURL}search/movie?query=${keyword}&api_key=${API_KEY}&language=en-US`);
};
