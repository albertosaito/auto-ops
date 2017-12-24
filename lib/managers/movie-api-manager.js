import Promise from 'bluebird'
import request from 'request'
import * as logger from '../utils/logger'
import { OMDB_API } from '../constants'

export function findPlots (req, res) {
  const GET = Promise.promisify(request.get)
  logger.debug('findPlots called...')
  return GET(_createSearchMovieRequest(req.query[OMDB_API.TITLE_PARAM]))
  .then(response => response.body[OMDB_API.SEARCH_RESULTS].map(movie => movie[OMDB_API.IMDB_ID]))
  .then(ids => Promise.map(ids, _getMovieData))
  .then(results => res.send(results.map(response => {
    return response.body[OMDB_API.PLOT_RESULT]
  })
  .filter(plot => plot !== OMDB_API.INVALID_PLOT)))
}

function _getMovieData (imdb) {
  const GET = Promise.promisify(request.get)
  return GET(_createGetMovieDataRequest(imdb))
}

function _createGetMovieDataRequest (imdb) {
  const qs = {}
  qs[OMDB_API.SEARCH_BY_ID_PARAM] = imdb
  qs[OMDB_API.PLOT_PARAM] = OMDB_API.FULL_PLOT_PARAM_VALUE
  qs[OMDB_API.API_KEY_PARAM] = OMDB_API.API_KEY
  return {
    uri: OMDB_API.ENDPOINT_URL,
    qs,
    json: true
  }
}

function _createSearchMovieRequest (query) {
  const qs = {}
  qs[OMDB_API.SEARCH_PARAM] = query
  qs[OMDB_API.API_KEY_PARAM] = OMDB_API.API_KEY
  return {
    uri: OMDB_API.ENDPOINT_URL,
    qs,
    json: true
  }
}
