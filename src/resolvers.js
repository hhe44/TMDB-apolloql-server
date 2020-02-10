module.exports = {
    Query: {
        movie: (_, id , { dataSources }) => dataSources.movieAPI.getMovieById( id )
    }
}