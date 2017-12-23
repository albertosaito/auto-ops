module.exports.ENDPOINT = {
  DEFAULT_PORT: 8080
}

module.exports.LOGGER = {
  BLACK: '\x1b[30m',
  RED_BG: '\x1b[41m',
  YELLOW_BG: '\x1b[43m',
  BLUE_BG: '\x1b[44m',
  RESET_CONSOLE_FORMAT: '\x1b[0m',
  BLINK: '\x1b[5m',
  WHITE: '\x1b[37m',
  GREEN_BG: '\x1b[42m'
}

module.exports.HEALTH = {
  DEFAULT_HEALTH_RESPONSE: {
    ok: true
  }
}

module.exports.OMDB_API = {
  ENDPOINT_URL: 'http://www.omdbapi.com',
  SEARCH_PARAM: 's',
  API_KEY_PARAM: 'apikey',
  API_KEY: '8880398',
  SEARCH_BY_ID_PARAM: 'i',
  TITLE_PARAM: 'title',
  IMDB_ID: 'imdbID',
  SEARCH_RESULTS: 'Search',
  PLOT_RESULT: 'Plot',
  PLOT_PARAM: 'plot',
  FULL_PLOT_PARAM_VALUE: 'full',
  INVALID_PLOT: 'N/A'
}
