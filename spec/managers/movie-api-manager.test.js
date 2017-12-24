/* eslint-env jest */
/* eslint-env jasmine */

jest.mock('../../lib/utils/logger')
const testSubject = require('../../lib/managers/movie-api-manager')

describe('@movie-api-manager module', () => {
  const request = require.requireActual('request')

  test.only('Should make a call to OMDB API to obtain movie info and send JSON with plot', done => {
    const mockReq = {
      query: {
        title: 'title-here'
      }
    }
    const mockRes = {
      send: param => param
    }
    request.get = jest.fn()
    .mockImplementationOnce((options, cb) => {
      const searchResults = {
        Search: [
          { imdbID: 'imdb-1' }, { imdbID: 'imdb-2' }
        ]
      }
      cb(null, { body: searchResults }) // err, response
    })
    .mockImplementation((options, cb) => {
      cb(null, { body: { Plot: 'plot-1' } })
    })

    testSubject.findPlots(mockReq, mockRes)
    .then(plots => {
      expect(plots).toEqual(['plot-1', 'plot-1'])
      done()
    })
    .catch(err => {
      done.fail(`Should not reach here: ${err}`)
    })
  })
})
