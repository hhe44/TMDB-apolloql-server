const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {

    movies(
        page: Int,
        mediaType: String!
        sort_by: String,
        include_adult: Boolean
    ): [Movie]

    movie(id: ID!): Movie
    
  }

  type Movie {
    adult: Boolean
    backdrop_path: String
    budget: Int
    """
    genre: Genre
    """
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