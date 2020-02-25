const { RESTDataSource } = require("apollo-datasource-rest");
const axios = require("axios");
const baseURL = "https://api.themoviedb.org/3"
const queryString = require('query-string');

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
  }

  movieReducer(movie) {
    return movie
  }

  async getMovies(args) {
    const {mediaType, ...allElse} = args;
    const link = queryString.stringifyUrl({
      url: `${baseURL}/${mediaType}?api_key=${process.env.API_KEY}&`,
      query: allElse
    });
    const res = await axios.get(link);
    const movieResults = res.data.results;
    const movieList = movieResults.map(this.movieReducer);
    return movieList;
  }

  async getMovieById(args) {
    const link = `${baseURL}/movie/${args.id}?api_key=${process.env.API_KEY}`;
    const res = await axios.get(link);
    return this.movieReducer(res.data);
  }
}

module.exports = MovieAPI;
