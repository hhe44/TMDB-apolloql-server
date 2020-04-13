const { RESTDataSource } = require("apollo-datasource-rest");
const axios = require("axios");
const baseURL = "https://api.themoviedb.org/3";
const queryString = require("query-string");

class TheMovieDB extends RESTDataSource {
  constructor() {
    super();
  }

  async init(API_KEY) {
    // get & set API Key
    this.API_KEY = API_KEY;

    // get & set movieGenres
    this.movieGenres = {};
    const movieGenreArray = (
      await axios.get(`${baseURL}/genre/movie/list?api_key=${this.API_KEY}`)
    ).data.genres;
    movieGenreArray.forEach((movieGenre) => {
      this.movieGenres[movieGenre.id] = movieGenre.name;
    });

    // get & set tvGenres
    this.tvGenres = {};
    const tvGenreArray = (
      await axios.get(`${baseURL}/genre/tv/list?api_key=${this.API_KEY}`)
    ).data.genres;
    tvGenreArray.forEach((tvGenre) => {
      this.tvGenres[tvGenre.id] = tvGenre.name;
    });
  }

  movieReducer(movie) {
    if (movie.genres != null) {
      // if movie genres exist, DON'T DO ANYTHING.
    } else {
      // otherwise we need to utilize genre ids
      movie.genres = [];
      movie.genre_ids.forEach((genreId) => {
        const genre = {
          name: this.movieGenres[genreId],
          id: genreId,
        };
        movie.genres.push(genre);
      });
    }
    return movie;
  }

  tvShowReducer(show) {
    if (show.genres != null) {
      // if tv genres exist, DON'T DO ANYTHING.
    } else {
      // otherwise we need to utilize genre ids
      show.genres = [];
      show.genre_ids.forEach((genreId) => {
        const genre = {
          name: this.tvGenres[genreId],
          id: genreId,
        };
        show.genres.push(genre);
      });
    }
    return show;
  }

  imageReducer(images) {
    if (images.backdrops == undefined) return images;
    const imageArray = [];
    images.backdrops.forEach((backdrop) => {
      backdrop.imageType = "backdrop";
      imageArray.push(backdrop);
    });
    images.posters.forEach((poster) => {
      poster.imageType = "poster";
      imageArray.push(poster);
    });
    return imageArray;
  }

  personCreditReducer(personCredit) {
    personCredit.genres = [];
    personCredit.genre_ids.forEach((genreId) => {
      const genre = {
        name:
          personCredit.media_type == "movie"
            ? this.movieGenres[genreId]
            : this.tvGenres[genreId],
        id: genreId,
      };
      personCredit.genres.push(genre);
    });
    return personCredit;
  }

  taggedImageReducer(taggedImage) {
    const image = taggedImage;
    const media = taggedImage.media;
    return {image, media};
  }

  async getMedias(endpoint, type, args) {
    const { id, time_window, ...rest } = args;
    let url = "";
    if (time_window) {
      url = `${baseURL}/${endpoint}/${type}/${time_window}`;
    } else if ((endpoint === "discover") || (endpoint === "search")) {
      url = `${baseURL}/${endpoint}/${type}`;
    } else if (!id) {
      url = `${baseURL}/${type}/${endpoint}`;
    } else {
      url = `${baseURL}/${type}/${id}/${endpoint}`;
    }
    const link = queryString.stringifyUrl({
      url: `${url}?api_key=${this.API_KEY}&`,
      query: rest,
    });
    const results = (await axios.get(link)).data.results;
    if (type == "movie") {
      return results.map((movie) => this.movieReducer(movie));
    } else if (type == "tv") {
      return results.map((tvShow) => this.tvShowReducer(tvShow));
    } else return results
  }

  async getMedia(endpoint, type, args) {
    const { id, ...rest } = args;
    let url = `${baseURL}/${type}/${id}`;
    url += endpoint !== "" ? `/${endpoint}` : "";
    let link = queryString.stringifyUrl({
      url: `${url}?api_key=${this.API_KEY}&`,
      query: rest,
    });
    let res;
    switch (endpoint) {
      case "":
        return (await axios.get(link)).data;
      case "alternative_titles":
        const response = await axios.get(link);
        return response.data.titles || response.data.results;
      case "credits":
        return (await axios.get(link)).data;
      case "combined_credits":
        res = (await axios.get(link)).data;
        res = res.cast.concat(res.crew);
        return res.map((personCredit) =>
          this.personCreditReducer(personCredit)
        );
      case "images":
        if (args.imageLanguagefilter == null && type != "person")
          link += "&include_image_language";
        res = (await axios.get(link)).data;
        return this.imageReducer(res || res.profiles);
      case "tagged_images":
        return (await axios.get(link)).data.results;
      case "videos":
        return (await axios.get(link)).data.results;
      default:
        res = await axios.get(link);
        return res.data.results != null ? res.data.results : res.data;
    }
  }

}

module.exports = TheMovieDB;
