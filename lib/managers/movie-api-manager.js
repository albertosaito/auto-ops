const Promise = require('bluebird')
const request = require('request')
const GET = Promise.promisify(request.get)
const constants = require('../constants').OMDB_API
const logger = require('../utils/logger')

function findPlots (req, res) {
  logger.debug('findPlots called...')
  return GET(_createSearchMovieRequest(req.query[constants.TITLE_PARAM]))
  .then(response => response.body[constants.SEARCH_RESULTS].map(movie => movie[constants.IMDB_ID]))
  .then(ids => Promise.map(ids, _getMovieData))
  .then(results => res.send(results.map(response => response.body[constants.PLOT_RESULT]).filter(plot => plot !== constants.INVALID_PLOT)))
}

function _getMovieData (imdb) {
  return GET(_createGetMovieDataRequest(imdb))
}

function _createGetMovieDataRequest (imdb) {
  const qs = {}
  qs[constants.SEARCH_BY_ID_PARAM] = imdb
  qs[constants.PLOT_PARAM] = constants.FULL_PLOT_PARAM_VALUE
  qs[constants.API_KEY_PARAM] = constants.API_KEY
  return {
    uri: constants.ENDPOINT_URL,
    qs,
    json: true
  }
}

function _createSearchMovieRequest (query) {
  const qs = {}
  qs[constants.SEARCH_PARAM] = query
  qs[constants.API_KEY_PARAM] = constants.API_KEY
  return {
    uri: constants.ENDPOINT_URL,
    qs,
    json: true
  }
}

module.exports = {
  findPlots
}
