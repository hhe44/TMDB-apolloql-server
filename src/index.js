// use line 2 when running normally
require('dotenv').config({path: '../.env'})
// use line 4 when debugging
// require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const MovieAPI = require("./datasources/movie");
const myMovieAPI = new MovieAPI();

myMovieAPI.init();

const dataSources = () => ({
  movieAPI: myMovieAPI
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
