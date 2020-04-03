// use line 2 when running normally
// require('dotenv').config({path: '../.env'})
// use line 4 when debugging
require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TheMovieDB = require("./datasources/theMovieDB");

// To stop seeing the intro message set sendIntroMessage to false
const sendIntroMessage = true;
if(sendIntroMessage) {
  console.info("\nSet your API key inside your HTTP Headers before running any queries!");
  console.info("You can do so by entering the following object inside your HTTP Headers:");
  console.info("{ \"authorization\" : \"<INSERT_API_KEY_HERE>\" }");
  console.info("Consult the README.md for more details");
}

// previousErrorMessage is needed to stop the server from spamming error messaages
let previousErrorMessage = "Request failed with status code 401";

const server = new ApolloServer({
  typeDefs, resolvers, context: ({ req }) => {
    const API_KEY = req.headers.authorization || "";
    const theMovieDB = new TheMovieDB();
    theMovieDB.init(API_KEY).catch((error) => {
      if(previousErrorMessage != error.message)
        console.error(error.message);
        previousErrorMessage = error.message
    });
    return { dataSources: {movieDB: theMovieDB} };
  }
});

server
  .listen({ port: 4000 })
  .then(({ url }) => {
  console.log(`\n🚀 Server ready at ${url}`);
});
