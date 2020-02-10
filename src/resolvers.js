module.exports = {
    Query: {
        movies: (_, {page, mediaType}, {dataSources}) => dataSources.movieAPI.getMovies({page, mediaType}),
        movie: (_, {id}, { dataSources }) => dataSources.movieAPI.getMovieById({id})
    }
}