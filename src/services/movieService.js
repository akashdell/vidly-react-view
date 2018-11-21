import http from './httpService';
import { apiUrl } from '../config.json'

const movieEndPoint = apiUrl + "/movies"

function movieUrl(id) {
  return `${movieEndPoint}/${id}`
}

export function getMovies() {
  return http.get(movieEndPoint)
}
export function getMovie(movieId) {
  return http.get(movieUrl(movieId))
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie }
    delete body._id
    return http.put(movieUrl(movie._id), body)
  }
  return http.post(movieEndPoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId))
}