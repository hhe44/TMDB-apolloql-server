const axios = require('axios');

const { RESTDataSource } = require('apollo-datasource-rest');

class MovieAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.themoviedb.org/3';
    }

    // leaving this inside the class to make the class easier to test
    movieReducer(movie) {
      return {
          adult: movie.adult,
          backdrop_path: movie.backdrop_path,
          budget: movie.budget,
          homepage: movie.homepage,
          id: movie.id,
          imdb_id: movie.imdb_id,
          original_language: movie.original_language,
          original_title: movie.original_title,
          overview: movie.overview,
          popularity: movie.popularity,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          revenue: movie.revenue,
          runtime: movie.runtime,
          status: movie.status,
          tagline: movie.tagline,
          title: movie.title,
          video: movie.video,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count
      };
    }
  
    async getMovie(movieId) {
        const link = `${this.baseURL}/movie/${movieId.id}?api_key=a8e93c8551b6dd18fe3863ce195fd340`;
        const res = await axios.get(link);
        return this.movieReducer(res.data);
    }

  }
  
  module.exports = MovieAPI;
  