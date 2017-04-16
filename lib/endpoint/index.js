const express = require('express')
const app = express()
const constants = require('../constants').ENDPOINT
const healthManager = require('../managers/health-manager')
const movieManager = require('../managers/movie-api-manager')
const logger = require('../utils/logger')

// health v1
app.get('/api/v1/health', healthManager.checkHealth)
// find-plots v1
app.get('/api/v1/movie-plots', movieManager.findPlots)

app.get('/api/v1/test', (req, res) => {
  res.send()
})

app.listen(constants.DEFAULT_PORT)
logger.info(`Endpoint listening on port ${constants.DEFAULT_PORT}...`)
