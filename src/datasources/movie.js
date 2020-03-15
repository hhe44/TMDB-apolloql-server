const { RESTDataSource } = require("apollo-datasource-rest");
const axios = require("axios");
const baseURL = "https://api.themoviedb.org/3";
const queryString = require("query-string");

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
  }

  async init() {
    // get & set movieGenres
    this.movieGenres = {};
    const movieGenreArray = (await axios.get(
      `${baseURL}/genre/movie/list?api_key=${process.env.API_KEY}`
    )).data.genres;
    movieGenreArray.forEach((movieGenre) => {
      this.movieGenres[movieGenre.id] = movieGenre.name;
    });
  }

  movieReducer(movie) {
    if(movie.genres != null){
      // if movie genres exist, DON'T DO ANYTHING.
    } else {
      // otherwise we need to utilize genre ids
      movie.genres = [];
      movie.genre_ids.forEach((genreId) => {
        const genre = {
          "name" : this.movieGenres[genreId],
          "id" : genreId
        }
        movie.genres.push(genre);
      });
    }
    return movie;
  }

  async discoverMovies(args) {
    const link = queryString.stringifyUrl({
      url: `${baseURL}/discover/movie?api_key=${process.env.API_KEY}&`,
      query: args
    });
    const res = await axios.get(link);
    const movieResults = res.data.results;
    const movieList = movieResults.map(movie => this.movieReducer(movie));
    return movieList;
  }

  async getMovieById(args) {
    const link = `${baseURL}/movie/${args.id}?api_key=${process.env.API_KEY}`;
    const res = await axios.get(link);
    return this.movieReducer(res.data);
  }

  async getMovieGenres() {
    const link = `${baseURL}/genre/movie/list?api_key=${process.env.API_KEY}`;
    const res = await axios.get(link);
    return res.data;
  }
}

module.exports = MovieAPI;
