module.exports = {
    Query: {

        discoverMovies: (_, discoverMovieParams = {
            page, certification, certification_gte, certification_lte, certification_country, include_adult, 
            include_video, language, primary_release_date_gte, primary_release_date_lte, primary_release_year, region, 
            release_date_gte, release_date_lte, sort_by, vote_average_gte, vote_average_lte, vote_count_gte, vote_count_lte, 
            with_cast, with_companies, with_crew, with_genres, with_keywords, with_original_language, with_people, with_release_type, 
            with_runtime_gte, with_runtime_lte, without_genres, without_keywords, year
        }, {dataSources}) => dataSources.movieDB.discoverMovies({
            ...discoverMovieParams
        }),

        similarMovies: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMovies("similar",{id,page}),

        recommendMovies: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMovies("recommendations",{id,page}),

        nowPlayingMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMovies("now_playing",{page}),

        upcomingMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMovies("now_playing",{page}),

        topratedMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMovies("top_rated",{page}),

        trendingMovies: (_, {time_window, page}, { dataSources }) => dataSources.movieDB.getTrendingMovies({time_window, page}),

        movie: (_, {id}, { dataSources }) => dataSources.movieDB.getMovie("",{id}),

        movieAlternateTitles: (_, {id}, { dataSources }) => dataSources.movieDB.getMovie("alternative_titles",{id}),

        movieCredits: (_, {id}, { dataSources }) => dataSources.movieDB.getMovie("credits",{id}),

        movieImages: (_, {id, include_image_language}, { dataSources }) => dataSources.movieDB.getMovie("images",{id, include_image_language}),

        movieVideos: (_, {id}, { dataSources }) => dataSources.movieDB.getMovie("videos",{id}),

        tvShow: (_, {id}, { dataSources }) => dataSources.movieDB.getTvShow("",{id}),

    }
}