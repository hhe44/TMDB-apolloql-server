const { ApolloServer, gql } = require("apollo-server");
const MovieAPI = require('./datasources/movie');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type Query {
    movie(id: ID!): Movie
  }

  type Movie {
    adult: Boolean,
    backdrop_path: String,
    budget: Int,
    homepage: String,
    id: ID!,
    imdb_id: String,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Float,
    poster_path: String,
    release_date: String,
    revenue: Int,
    runtime: Int,
    status: String,
    tagline: String,
    title: String,
    video: Boolean,
    vote_average: Float,
    vote_count: Int
  }

`;

const dataSources = () => ({
  movieAPI: new MovieAPI()
});

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    movie: (_, { id }, { dataSources }) =>
      dataSources.movieAPI.getMovie({ id }),
  }
};


const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});