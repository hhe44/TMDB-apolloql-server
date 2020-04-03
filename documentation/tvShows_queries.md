# Retrieve Multiple TV Shows

[discoverTvShows](https://developers.themoviedb.org/3/discover/tv-discover) | Required Params: **None**
```
{
  discoverTvShows(
    page: 3
    with_genres: "10759"
    without_genres: "14"
  ){
    name
    origin_country
  }
}
```

[searchTvShows](https://developers.themoviedb.org/3/search/search-tv-shows) | Required Params: **query**
```
{
  searchTvShows(
    query: "Harley"
  ){
    name
    first_air_date
  }
}
```

[similarTvShows](https://developers.themoviedb.org/3/tv/get-similar-tv-shows) | Required Params: **id**
```
{
  similarTvShows(id:1399){
    name
    genres{name}
  }
}
```

[recommendTvShows](https://developers.themoviedb.org/3/tv/get-tv-recommendations) | Required Params: **id**
```
{
  recommendTvShows(id:1399){
    name
    networks{name origin_country}
  }
}
```

[popularTvShows](https://developers.themoviedb.org/3/tv/get-popular-tv-shows) | Required Params: **None**
```
{
  popularTvShows{
    name
		popularity
  }
}
```

[onTheAirTvShows](https://developers.themoviedb.org/3/tv/get-tv-on-the-air) | Required Params: **None**
```
{
  onTheAirTvShows{
    name
    first_air_date
  }
}
```

[airingTodayTvShows](https://developers.themoviedb.org/3/tv/get-tv-airing-today) | Required Params: **None**
```
{
  airingTodayTvShows{
    name
    original_language
  }
}
```

[topratedTvShows](https://developers.themoviedb.org/3/tv/get-top-rated-tv) | Required Params: **None**
```
{
  topratedTvShows{
    name
    vote_average
  }
}
```

[trendingTvShows](https://developers.themoviedb.org/3/trending/get-trending) | Required Params: **None**
*There are only two options for time_window - day or week*
```
{
  trendingTvShows{
    name
    poster_path
  }
}
```