// use line 2 when running normally
require('dotenv').config({path: '../.env'})
// use line 4 when debugging
// require('dotenv').config()
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require('./resolvers');
const MovieAPI = require("./datasources/movie");

//two ideas: getGenrelist to initialize, or supply it as an argument
// const api = new MovieAPI();
// api.getGenreList();

const dataSources = () => ({
  // movieAPI: api
  movieAPI: new MovieAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
