module.exports = {
    Query: {

        discoverMovies: (_, discoverMovieParams = {
            page, certification, certification_gte, certification_lte, certification_country, include_adult, 
            include_video, language, primary_release_date_gte, primary_release_date_lte, primary_release_year, region, 
            release_date_gte, release_date_lte, sort_by, vote_average_gte, vote_average_lte, vote_count_gte, vote_count_lte, 
            with_cast, with_companies, with_crew, with_genres, with_keywords, with_original_language, with_people, with_release_type, 
            with_runtime_gte, with_runtime_lte, without_genres, without_keywords, year
        }, {dataSources}) => dataSources.movieAPI.discoverMovies({
            ...discoverMovieParams
        }),

        similarMovies: (_, {id,page}, { dataSources }) => dataSources.movieAPI.getMovies("similar",{id,page}),

        recommendMovies: (_, {id,page}, { dataSources }) => dataSources.movieAPI.getMovies("recommendations",{id,page}),

        nowPlayingMovies: (_, {page}, { dataSources }) => dataSources.movieAPI.getMovies("now_playing",{page}),

        upcomingMovies: (_, {page}, { dataSources }) => dataSources.movieAPI.getMovies("now_playing",{page}),

        topratedMovies: (_, {page}, { dataSources }) => dataSources.movieAPI.getMovies("top_rated",{page}),

        movie: (_, {id}, { dataSources }) => dataSources.movieAPI.getMovie("",{id}),

    }
}