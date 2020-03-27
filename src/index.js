// use line 2 when running normally
require('dotenv').config({path: '../.env'})
// use line 4 when debugging
// require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TheMovieDB = require("./datasources/theMovieDB");
const theMovieDB = new TheMovieDB();

theMovieDB.init();

const dataSources = () => ({
  movieDB: theMovieDB
});

const server = new ApolloServer({context: ({ req }) => {
  const API_KEY = req.headers.authorization || '';
  if (!API_KEY) 
    throw new Error('Enter your API Key into the Authorization Header');
  else
    return { API_KEY };
 }, typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
