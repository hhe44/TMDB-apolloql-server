# Retrieve Specifics of a Movie

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
