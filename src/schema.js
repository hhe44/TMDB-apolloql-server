const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {

    discoverMovies(
      page: Int
      certification: String
      certification_gte: String
      certification_lte: String
      certification_country: String
      include_adult: Boolean
      include_video: Boolean
      language: String
      primary_release_date_gte: String
      primary_release_date_lte: String
      primary_release_year: Int
      region: String
      release_date_gte: String
      release_date_lte: String
      sort_by: String
      vote_average_gte: Int
      vote_average_lte: Int
      vote_count_gte: Int
      vote_count_lte: Int
      with_cast: String
      with_companies: String
      with_crew: String
      with_genres: String
      with_keywords: String
      with_original_language: String
      with_people: String
      with_release_type: Int
      with_runtime_gte: Int
      with_runtime_lte: Int
      without_genres: String
      without_keywords: String
      year: Int
    ): [Movie]

    searchMovies(
      language: String
      query: String
      page: Int
      include_adult: Boolean
      region: String
      year: Int
      primary_release_year: Int
    ): [Movie]

    similarMovies(id: ID!, page: Int): [Movie]
    recommendMovies(id: ID!, page: Int): [Movie]
    popularMovies(page: Int): [Movie]
    nowPlayingMovies(page: Int): [Movie]
    upcomingMovies(page: Int): [Movie]
    topratedMovies(page: Int): [Movie]
    trendingMovies(time_window: String!, page: Int): [Movie]

    discoverTvShows(
      language: String
      sort_by: String
      air_date_gte: String
      air_date_lte: String
      first_air_date_gte: String
      first_air_date_lte: String
      first_air_date_year: Int
      page: Int
      timezone: String
      vote_average_gte: String
      vote_count_gte: String
      with_genres: String
      with_networks: String
      without_genres: String
      with_runtime_gte: String
      with_runtime_lte: String
      include_null_first_air_dates: Boolean
      with_origina_language: String
      without_keywords: String
      screened_theatrically: Boolean
      with_companies: String
      with_keywords: String
    ): [TvShow]

    searchTvShows(
      language: String
      page: Int
      query: String
      include_adult: Boolean
      first_air_date_year: Int
    ): [TvShow]
    
    similarTvShows(id: ID!, page: Int): [TvShow]
    recommendTvShows(id: ID!, page: Int): [TvShow]
    popularTvShows(page: Int): [TvShow]
    onTheAirTvShows(page: Int): [TvShow]
    airingTodayTvShows(page: Int): [TvShow]
    topratedTvShows(page: Int): [TvShow]
    trendingTvShows(time_window: String!, page: Int): [TvShow]

    movie(id: ID!): Movie
    movieAlternateTitles(id: ID!): [AlternateTitle]
    movieCredits(id: ID!): Credits
    movieImages(id: ID!, imageLanguagefilter: String): [Image]
    movieVideos(id: ID!): [Video]

    tvShow(id: ID!): TvShow
    tvShowAlternateTitles(id: ID!): [AlternateTitle]
    tvShowCredits(id: ID!): Credits
    tvShowImages(id: ID!, imageLanguagefilter: String): [Image]
    tvShowVideos(id: ID!): [Video]

  }

  type Movie {
    adult: Boolean
    backdrop_path: String
    budget: Int
    genres: [Genre]
    homepage: String
    id: ID!
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    revenue: Int
    runtime: Int
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type Genre {
    id: ID!
    name: String
  }
  
  type AlternateTitle {
    iso_3166_1: String
    title: String
  }

  type Credits {
    cast: [Cast]
    crew: [Crew]
  }

  type Cast {
    cast_id: ID!
    character: String
    credit_id: ID!
    gender: Int
    id: ID!
    name: String
    order: Int
    profile_path: String
  }

  type Crew {
    credit_id: ID!
    department: String
    gender: Int
    id: ID!
    job: String
    name: String
    profile_path: String
  }

  type Image {
    imageType: String
    aspect_ratio: Int
    file_path: String
    height: Int
    iso_639_1: String
    vote_average: Int
    vote_count: Int
    width: Int
  }

  type Video {
    id: ID!
    iso_639_1: String
    iso_3166_1: String
    key: String
    name: String
    site: String
    size: Int
    type: String
  }

  type TvShow {
    backdrop_path: String
    created_by: [Creator]
    episode_run_time: [Int]
    first_air_date: String
    genres: [Genre]
    homepage: String
    id: ID!
    in_production: Boolean
    languages: [String]
    last_air_date: String
    last_episode_to_air: Episode
    name: String
    next_episode_to_air: Episode
    networks: [Network]
    number_of_episodes: Int
    number_of_seasons: Int
    origin_country: [String]
    original_language: String
    original_name: String
    popularity: Float
    poster_path: String
    production_companies: [ProductionCompany]
    seasons: [Season]
    status: String
    type: String
    vote_average: Float
    vote_count: Int
  }

  type Creator {
    id: ID!
    credit_id: String
    name: String
    gender: Int
    profile_path: String
  }

  type Episode {
    air_date: String
    episode_number: Int
    id: ID!
    name: String
    overview: String
    production_code: String
    season_number: Int
    show_id: ID
    still_path: String
    vote_average: Float
    vote_count: Int
  }

  type Network {
    name: String
    id: ID!
    logo_path: String
    origin_country: String
  }

  type ProductionCompany {
    id: ID!
    logo_path: String
    name: String
    origin_country: String
  }

  type Season {
    air_date: String
    episode_count: Int
    id: ID!
    name: String
    overview: String
    poster_path: String
    season_number: Int
  }

`;

module.exports = typeDefs;
