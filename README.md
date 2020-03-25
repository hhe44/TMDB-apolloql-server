### Description:
ApolloQL Server for theMovieDB API, will be working in conjunction with [movie-app](https://github.com/henryhe44/movie-app)

### Run the app yourself
1) Get a MovieDB API key @ https://developers.themoviedb.org/
2) Clone git repo
3) Create a .env file with the following property: REACT_APP_API_KEY=(INSERT API KEY IN HERE)
4) Check that line 2 is uncommented and line 4 is commented
4) Run `node index.js` (or use nodemon)
5) Go to server and tinker!

### Planning Board
 Ideas and future todo's are found  [here](https://www.notion.so/daec20e458c34ea48ae585458e82b02d?v=c708b62ea18d4d94ac5f67b52dfa76a7)
  
### Queries

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
[movie](https://developers.themoviedb.org/3/movies/get-movie-details) | Required Params: **id**
*Get back more specific details of a movie such as imdb_id, revenue, etc*
```
{
  movie(id:550){
    title
    original_title
  }
}
```
[movieAlternateTitles](https://developers.themoviedb.org/3/movies/get-movie-alternative-titles) | Required Params: **id**
```
{
  movieAlternateTitles(id: 550){
    iso_3166_1
    title
  }
}
```
[movieCredits](https://developers.themoviedb.org/3/movies/get-movie-alternative-titles) | Required Params: **id**
```
{
  movieCredits(id: 550){
    cast{name character}
    crew{name job}
  }
}
```
[movieImages](https://developers.themoviedb.org/3/movies/get-movie-images) | Required Params: **id**
```
{
  movieImages(id: 550){
    imageType
    file_path
  }
}
```
[movieVideos](https://developers.themoviedb.org/3/movies/get-movie-videos) | Required Params: **id**
```
{
  movieVideos(id: 550){
    key name site
  }
}
```

### Special thanks to...
Cristian Florea - find his github on https://github.com/yoloonthebattlefield