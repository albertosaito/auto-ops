const constants = require('../constants').HEALTH
const logger = require('../utils/logger')

module.exports = {
  checkHealth: (req, res) => {
    logger.debug('checkHealth called...')
    return res.send(constants.DEFAULT_HEALTH_RESPONSE)
  }
}
