import { HEALTH } from '../constants'
import * as logger from '../utils/logger'

export function checkHealth (req, res) {
  logger.debug('checkHealth called...')
  return res.send(HEALTH.DEFAULT_HEALTH_RESPONSE)
}
