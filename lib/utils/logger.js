const constants = require('../constants').LOGGER

function warn (message) {
  _log(message, constants.BLACK, constants.YELLOW_BG)
}

function error (message) {
  _log(message, constants.BLACK, constants.RED_BG, constants.BLINK)
}

function info (message) {
  _log(message, constants.WHITE, constants.BLUE_BG)
}

function debug (message) {
  _log(message, constants.WHITE, constants.GREEN_BG)
}

function _log (message, color, bgColor, effect) {
  console.log(`${color}${bgColor}${effect || ''}${message}${constants.RESET_CONSOLE_FORMAT}`)
}

module.exports = {
  warn,
  error,
  info,
  debug
}
