const axios = require("axios");

const { RESTDataSource } = require("apollo-datasource-rest");

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3";
  }

  movieReducer(movie) {
    return {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      budget: movie.budget,
      genre: {
        id: movie.genres[0].id,
        name: movie.genres[0].name
      },
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
    const link = `${this.baseURL}/movie/${movieId.id}?api_key=${process.env.API_KEY}`;
    const res = await axios.get(link);
    return this.movieReducer(res.data);
  }
}

module.exports = MovieAPI;
