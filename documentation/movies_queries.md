# Get Multiple Movies

[discoverMovies](https://developers.themoviedb.org/3/discover/movie-discover) | Required Params: **None**
```
{
  discoverMovies(
    page: 5
    with_genres: 28
    include_adult: false
  ){
    title
    release_date
  }
}
```
[similarMovies](https://developers.themoviedb.org/3/movies/get-similar-movies) | Required Params: **id**
```
{
  similarMovies(
    page: 2
    id: 550
  ){
    title
    tagline
  }
}
```
[recommendMovies](https://developers.themoviedb.org/3/movies/get-movie-recommendations) | Required Params: **id**
```
{
  recommendMovies(id: 550){
    title
    genres{name}
  }
}
```
[nowPlayingMovies](https://developers.themoviedb.org/3/movies/get-now-playing) | Required Params: **None**
```
{
  nowPlayingMovies{
    title
    release_date
  }
}
```
[upcomingMovies](https://developers.themoviedb.org/3/movies/get-upcoming) | Required Params: **None**
```
{
  upcomingMovies{
    title
    overview
  }
}
```
[topratedMovies](https://developers.themoviedb.org/3/movies/get-top-rated-movies) | Required Params: **None**
```
{
  topratedMovies{
    title
    popularity
  }
}
```
[trendingMovies](https://developers.themoviedb.org/3/trending/get-trending) | Required Params: **time_window**
*There are only two options for time_window - day or week*
```
{
  trendingMovies(time_window: "day"){
    title
    original_title
  }
}
```
