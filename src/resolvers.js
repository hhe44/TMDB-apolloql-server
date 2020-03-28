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

        similarMovies: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("similar","movie",{id,page}),
        recommendMovies: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("recommendations","movie",{id,page}),
        nowPlayingMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("now_playing","movie",{page}),
        upcomingMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("now_playing","movie",{page}),
        topratedMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("top_rated","movie",{page}),
        trendingMovies: (_, {time_window, page}, { dataSources }) => dataSources.movieDB.getMedias("trending","movie",{time_window, page}),

        similarTvShows: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("similar","tv",{id,page}),
        recommendTvShows: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("recommendations","tv",{id,page}),
        nowPlayingTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("now_playing","tv",{page}),
        upcomingTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("now_playing","tv",{page}),
        topratedTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("top_rated","tv",{page}),
        trendingTvShows: (_, {time_window, page}, { dataSources }) => dataSources.movieDB.getMedias("trending","tv",{time_window, page}),

        movie: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("","movie",{id}),
        movieAlternateTitles: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("alternative_titles","movie",{id}),
        movieCredits: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("credits","movie",{id}),
        movieImages: (_, {id, include_image_language}, { dataSources }) => dataSources.movieDB.getMedia("images","movie",{id, include_image_language}),
        movieVideos: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("videos","movie",{id}),
        
        tvShow: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("","tv",{id}),

    }
}