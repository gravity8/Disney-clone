import axios from 'axios'

const movieBaseUrl = 'https://api.themoviedb.org/3/'
const api_key = 'a9660458eb8c9ab6173826f7a6e32c50'

const getTrendingVideos = axios.get(movieBaseUrl+'trending/all/day?api_key='+api_key)

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+ api_key;

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}