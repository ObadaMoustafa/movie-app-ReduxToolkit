# Movie app
![app photo](https://github.com/ObadaElSharbatly/movie-app/blob/main/src/images/Laptop-Free-Download-PNG.png)
## About
This is a simple movie app .. and my challange here is not about just creating a movie app but it's about creating a store with actions using `Redux toolkit` and it's a practice for using Tailwindcss

## Npms and technologies used
- TailwindCSS
- Redux toolkit
- React router dom
- Custom hooks
- Local storage
- responsive app
- 
## Demo
obada-movie-app.netlify.app/

## Use locally
- In the root folder you duplicate `.example.env` file and rename it to be `.env` then change the [apiKey](https://www.omdbapi.com/) to be yours
- in terminal use the root path and run:
```
npm i
```
```
npm start
```

## App features
- [x] Store has been made bu redux toolkit.
- [x] The Movies and favorite list stored in Redux Store and local storage.
- [x] User can clear his localStorage from `clear my history` button.
- [x] User can add or remove any movie from favorite list.
- [x] User can erase favorite list.
- [x] Search depouncing: the search works after the user finish writing.
- [x] Responsive app.
- [x] User will get a NONE FOUND page when using a fake url. e.g. using a wrong movie id.
- [x] ES6 + React function components.
- [x] Using custom hook. useFetch (only suitable for this OMDB api).
