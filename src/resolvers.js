module.exports = {
    Query: {
        
        movies: (_, {
            page, mediaType, sort_by, include_adult
        }, {dataSources}) => dataSources.movieAPI.getMovies({
            page, mediaType, sort_by, include_adult
        }),

        movie: (_, {id}, { dataSources }) => dataSources.movieAPI.getMovieById({id})
        
    }
}