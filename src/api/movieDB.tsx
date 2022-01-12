import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '37f380616d6251f625d99c1f736b5f1b',
    language: 'es-ES',
  },
});

export default movieDB;
