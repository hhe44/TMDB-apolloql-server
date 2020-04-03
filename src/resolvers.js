module.exports = {
    Query: {

        discoverMovies: (_, discoverMoviesParams = {
            page, certification, certification_gte, certification_lte, certification_country, include_adult, 
            include_video, language, primary_release_date_gte, primary_release_date_lte, primary_release_year, region, 
            release_date_gte, release_date_lte, sort_by, vote_average_gte, vote_average_lte, vote_count_gte, vote_count_lte, 
            with_cast, with_companies, with_crew, with_genres, with_keywords, with_original_language, with_people, with_release_type, 
            with_runtime_gte, with_runtime_lte, without_genres, without_keywords, year
        }, {dataSources}) => dataSources.movieDB.getMedias("discover","movie",{...discoverMoviesParams}),
        searchMovies: (_, searchMoviesParams = {
            language, query, page, include_adult, region, year, primary_release_year
        }, { dataSources }) => dataSources.movieDB.getMedias("search","movie",{...searchMoviesParams}),
        similarMovies: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("similar","movie",{id,page}),
        recommendMovies: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("recommendations","movie",{id,page}),
        popularMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("popular","movie",{page}),
        nowPlayingMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("now_playing","movie",{page}),
        upcomingMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("upcoming","movie",{page}),
        topratedMovies: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("top_rated","movie",{page}),
        trendingMovies: (_, {time_window, page}, { dataSources }) => dataSources.movieDB.getMedias("trending","movie",{time_window, page}),

        discoverTvShows: (_, discoverTvShowsParams = {
            language, sort_by, air_date_gte, air_date_lte, first_air_date_gte, first_air_date_lte, first_air_date_year, 
            page, timezone, vote_average_gte, vote_count_gte, with_genres, with_networks, without_genres, with_runtime_gte, with_runtime_lte,
            include_null_first_air_dates, with_origina_language, without_keywords, screened_theatrically, with_companies, with_keywords
        }, {dataSources}) => dataSources.movieDB.getMedias("discover","tv",{...discoverTvShowsParams}),
        searchTvShows: (_, searchTvShowsParams = {
            language, page, query, include_adult, first_air_date_year
        }, { dataSources }) => dataSources.movieDB.getMedias("search","tv",{...searchTvShowsParams}),
        similarTvShows: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("similar","tv",{id,page}),
        recommendTvShows: (_, {id,page}, { dataSources }) => dataSources.movieDB.getMedias("recommendations","tv",{id,page}),
        popularTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("popular","tv",{page}),
        onTheAirTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("on_the_air","tv",{page}),
        airingTodayTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("airing_today","tv",{page}),
        topratedTvShows: (_, {page}, { dataSources }) => dataSources.movieDB.getMedias("top_rated","tv",{page}),
        trendingTvShows: (_, {time_window, page}, { dataSources }) => dataSources.movieDB.getMedias("trending","tv",{time_window, page}),

        movie: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("","movie",{id}),
        movieAlternateTitles: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("alternative_titles","movie",{id}),
        movieCredits: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("credits","movie",{id}),
        movieImages: (_, {id, include_image_language}, { dataSources }) => dataSources.movieDB.getMedia("images","movie",{id, include_image_language}),
        movieVideos: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("videos","movie",{id}),

        tvShow: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("","tv",{id}),
        tvShowAlternateTitles: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("alternative_titles","tv",{id}),
        tvShowCredits: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("credits","tv",{id}),
        tvShowImages: (_, {id, include_image_language}, { dataSources }) => dataSources.movieDB.getMedia("images","tv",{id, include_image_language}),
        tvShowVideos: (_, {id}, { dataSources }) => dataSources.movieDB.getMedia("videos","tv",{id}),

    }
}