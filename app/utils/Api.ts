import {Constants, token} from './Constant';

const headers = {
  accept: 'application/json',
  Authorization: token,
};

const API_ROUTE = `${Constants.API_URL}/${Constants.API_VERSION}`;

const options = {
  method: 'GET',
  headers,
};

export const getMovieList = async ({pageParam}: {pageParam: number}) => {
  const url = `${API_ROUTE}/movie/popular?language=en-US&page=${pageParam}`;
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json.results;
};

export const searchMovies = async (searchQuery = '') => {
  const response = await fetch(
    `${API_ROUTE}/search/movie?query=${encodeURIComponent(searchQuery)}`,
    options,
  );
  const data = await response.json();
  return data;
};
