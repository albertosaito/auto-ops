/* eslint-env jest */

const testSubject = require('../../lib/managers/health-manager')
const logger = require('../../lib/utils/logger')
const req = {}
const res = {
  send: (data) => data
}
const expectedResponse = {
  ok: true
}
const expectedDebugStatement = 'checkHealth called...'

describe('@health-manager Module', () => {
  beforeEach(() => {
    res.send = jest.fn()
    logger.debug = jest.fn()
  })

  test('', () => {
    testSubject.checkHealth(req, res)
    expect(res.send).toBeCalledWith(expectedResponse)
    expect(logger.debug).toBeCalledWith(expectedDebugStatement)
  })
})
