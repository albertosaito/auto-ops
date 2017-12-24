import express from 'express'
import { ENDPOINT } from '../constants'
import * as healthManager from '../managers/health-manager'
import * as movieManager from '../managers/movie-api-manager'
import * as logger from '../utils/logger'

const app = express()
// health v1
app.get('/api/v1/health', healthManager.checkHealth)
// find-plots v1
app.get('/api/v1/movie-plots', movieManager.findPlots)

app.get('/api/v1/test', (req, res) => {
  res.send()
})

app.listen(ENDPOINT.DEFAULT_PORT)
logger.info(`Endpoint listening on port ${ENDPOINT.DEFAULT_PORT}...`)
