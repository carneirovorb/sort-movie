import axios from 'axios';

const api_key = 'fb06b73f61b75b9972d2e0b23063b0e6';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getMovies = async lastpage => {
  let release_date_lte = Math.floor(Math.random() * (2020 - 1995)) + 1995;
  let release_date_gte = release_date_lte - 3;
  // Math.floor(Math.random() * (release_date_lte - 1995)) + 1995;
  console.log(release_date_lte + ' - ' + release_date_gte);
  return await api.get(
    'discover/movie?api_key=' +
      api_key +
      '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' +
      lastpage,
  );
};

export const getCast = async id => {
  return await api.get('movie/' + id + '/credits?api_key=' + api_key);
};

export const getMovieDetails = async id => {
  return await api.get('movie/' + id + '?language=pt-BR&api_key=' + api_key);
};
