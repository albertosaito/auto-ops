import { LOGGER } from '../constants'

export function warn (message) {
  _log(message, LOGGER.BLACK, LOGGER.YELLOW_BG)
}

export function error (message) {
  _log(message, LOGGER.BLACK, LOGGER.RED_BG, LOGGER.BLINK)
}

export function info (message) {
  _log(message, LOGGER.WHITE, LOGGER.BLUE_BG)
}

export function debug (message) {
  _log(message, LOGGER.WHITE, LOGGER.GREEN_BG)
}

function _log (message, color, bgColor, effect) {
  console.log(`${color}${bgColor}${effect || ''}${message}${LOGGER.RESET_CONSOLE_FORMAT}`)
}
