/* eslint-env jest */
/* eslint-env jasmine */

const testSubject = require('../../lib/managers/async-manager')
jest.unmock('bluebird')

describe('@async-manager module', () => {
  const request = require.requireActual('request')

  test('It should call users endpoint and return a list of users', done => {
    const expectedResponse = {
      body: [
        { name: 'abc' },
        { name: 'def' },
        { name: 'ghi' }
      ]
    }
    request.get = jest.fn((options, cb) => {
      cb(null, expectedResponse) // err, response
    })
    testSubject.getMockUsers()
    .then(users => {
      expect(users.length).toEqual(3)
      expect(request.get).toHaveBeenCalledWith(
        {
          'method': 'get',
          'url': 'https://jsonplaceholder.typicode.com/users'
        },
        jasmine.any(Function))
      done()
    })
    .catch(err => {
      done.fail(`Should not fail ${err}`)
    })
  })

  test('It should throw an error if GET request fails', done => {
    request.get = jest.fn((options, cb) => {
      cb(new Error('BOOM!'), null) // eslint-disable-line
    })
    testSubject.getMockUsers()
    .then(() => {
      done.fail('Should not reach here')
    })
    .catch(err => {
      expect(err.message).toEqual('BOOM!')
      done()
    })
  })
})
