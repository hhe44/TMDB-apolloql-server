module.exports = {
    Query: {

        discoverMovies: (_, discoverMovieParams = {
            page, certification, certification_gte, certification_lte, certification_country, include_adult, 
            include_video, language, primary_release_date_gte, primary_release_date_lte, primary_release_year, region, 
            release_date_gte, release_date_lte, sort_by, vote_average_gte, vote_average_lte, vote_count_gte, vote_count_lte, 
            with_cast, with_companies, with_crew, with_genres, with_keywords, with_original_language, with_people, with_release_type, 
            with_runtime_gte, with_runtime_lte, without_genres, without_keywords, year
        }, {dataSources}) => dataSources.movieAPI.discoverMovies({
            discoverMovieParams
        }),

        getSimilarMovies: (_, getSimilarMoviesParams = {
            id,page
        }, { dataSources }) => dataSources.movieAPI.getSimilarMovies(getSimilarMoviesParams),

        recommendMovies: (_, recommendMoviesParams = {
            id,page
        }, { dataSources }) => dataSources.movieAPI.recommendMovies(recommendMoviesParams),

        movie: (_, {id}, { dataSources }) => dataSources.movieAPI.getMovieById({id}),

    }
}