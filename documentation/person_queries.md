# Retrieve Specifics about a Person

[person](https://developers.themoviedb.org/3/people/get-person-details) | Required Params: **id**
*Get back more specific details of a person such as birthday, bio, place of birth, etc*
```
{
  person(id:73457){ 
    name birthday gender
  }
}
```

[personAllCredits](https://developers.themoviedb.org/3/people/get-person-combined-credits) | Required Params: **id**
*Get all the movie & TV show credits for a person, whether they were a cast or a crew member  
media_type will help distinguish between movies & tv shows  
while cast roles will have a character and crew roles will have a job*
```
{
  personAllCredits(id:73457){
    adult
    backdrop_path
    character
    credit_id
    department
    episode_count
    first_air_date
    genres{ name }
    id
    job
    name
    media_type
    origin_country
    original_language
    original_name
    original_title
    overview
    popularity
    poster_path
    release_date
    title
    video
    vote_average
    vote_count
  }
}
```

[personImages](https://developers.themoviedb.org/3/people/get-person-images) | Required Params: **id**
*Observe that there are no Image Types, as a person is not a media (which has backgrounds & posters)*
```
{
  personImages(id:73457){
    imageType
    vote_average
    vote_count
  }
}
```

[personTaggedImages](https://developers.themoviedb.org/3/people/get-tagged-images) | Required Params: **id**
```
{
  personTaggedImages(id:73457){
    media_type
    media{title}
    file_path
    aspect_ratio
  }
}
```