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
    const movieGenreArray = (
      await axios.get(
        `${baseURL}/genre/movie/list?api_key=${process.env.API_KEY}`
      )
    ).data.genres;
    movieGenreArray.forEach(movieGenre => {
      this.movieGenres[movieGenre.id] = movieGenre.name;
    });
  }

  movieReducer(movie) {
    if (movie.genres != null) {
      // if movie genres exist, DON'T DO ANYTHING.
    } else {
      // otherwise we need to utilize genre ids
      movie.genres = [];
      movie.genre_ids.forEach(genreId => {
        const genre = {
          name: this.movieGenres[genreId],
          id: genreId
        };
        movie.genres.push(genre);
      });
    }
    return movie;
  }

  async discoverMovies(discoverMovieParams) {
    const link = queryString.stringifyUrl({
      url: `${baseURL}/discover/movie?api_key=${process.env.API_KEY}&`,
      query: discoverMovieParams
    });
    return (await axios.get(link)).data.results.map(movie =>
      this.movieReducer(movie)
    );
  }

  async getMovies(endpoint, args) {
    let url = `${baseURL}/movie/`;
    if(args.id == null || undefined){
      // DO NOTHING
    } else {
      url += `${args.id}/`;
    }
    const link = queryString.stringifyUrl({
      url: `${url}${endpoint}?api_key=${process.env.API_KEY}&`,
      query: args
    });
    return (await axios.get(link)).data.results.map(movie =>
      this.movieReducer(movie)
    );
  }

  async getMovie(endpoint, args) {
    let url = `${baseURL}/movie/${args.id}`;
    if(endpoint == null || undefined){
      url += `/${endpoint}`
    }
    const link = queryString.stringifyUrl({
      url: `${url}?api_key=${process.env.API_KEY}&`,
      query: args
    });
    return (await axios.get(link)).data;
  }
}

module.exports = MovieAPI;
