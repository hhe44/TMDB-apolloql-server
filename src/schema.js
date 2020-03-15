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

    movie(id: ID!): Movie
    
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
`;

module.exports = typeDefs;