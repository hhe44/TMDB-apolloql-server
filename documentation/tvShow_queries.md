# Retrieve Specifics of a TV Show

[tvShow](https://developers.themoviedb.org/3/tv/get-tv-details) | Required Params: **id**
*Get back more specific details of a tv show such as production status, creators, last air date, etc*
```
{
  tvShow(id: 1399){
    created_by {name}
    name
    number_of_seasons
    number_of_episodes
    popularity
    poster_path
    vote_average
    vote_count
  }
}
```

[tvShowAlternateTitles](https://developers.themoviedb.org/3/tv/get-tv-alternative-titles) | Required Params: **id**
```
{
  tvShowAlternateTitles(id:1399){
    title
    iso_3166_1
  }
}
```

[tvShowCredits](https://developers.themoviedb.org/3/tv/get-tv-credits) | Required Params: **id**
```
{
  tvShowCredits(id:1399){
    cast{name character}
    crew{name job}
  }
}
```

[tvShowImages](https://developers.themoviedb.org/3/tv/get-tv-images) | Required Params: **id**
```
{
  tvShowImages(id:1399){
    imageType
    file_path
  }
}
```

[tvShowVideos](https://developers.themoviedb.org/3/tv/get-tv-images) | Required Params: **id**
```
{
  tvShowVideos(id:1399){
    type site key
  }
}
```