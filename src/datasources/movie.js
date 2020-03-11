const { RESTDataSource } = require("apollo-datasource-rest");
const axios = require("axios");
const baseURL = "https://api.themoviedb.org/3"
const queryString = require('query-string');

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.movieGenreList = this.getMovieGenres();
  }

  async movieReducer(movie) {
    // let test = await this.movieGenreList;
    // console.log(test);
    return movie;
  }

  async discoverMovies(args) {
    const link = queryString.stringifyUrl({
      url: `${baseURL}/discover/movie?api_key=${process.env.API_KEY}&`,
      query: args
    });
    const res = await axios.get(link);
    const movieResults = res.data.results;
    const movieList = await Promise.all(movieResults.map(this.movieReducer));
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
