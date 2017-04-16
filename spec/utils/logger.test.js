/* eslint-env jest */

const testSubject = require('../../lib/utils/logger')
const loggerConstants = require('../../lib/constants').LOGGER
const expectedWarnMessage = `${loggerConstants.BLACK}${loggerConstants.YELLOW_BG}BOOM${loggerConstants.RESET_CONSOLE_FORMAT}`
const expectedInfoMessage = `${loggerConstants.WHITE}${loggerConstants.BLUE_BG}BOOM${loggerConstants.RESET_CONSOLE_FORMAT}`
const expectedDebugMessage = `${loggerConstants.WHITE}${loggerConstants.GREEN_BG}BOOM${loggerConstants.RESET_CONSOLE_FORMAT}`
const expectedErrorMessage = `${loggerConstants.BLACK}${loggerConstants.RED_BG}${loggerConstants.BLINK}BOOM${loggerConstants.RESET_CONSOLE_FORMAT}`

describe('@logger Module', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })

  test('#warn - Should be printed in black on yellow background', () => {
    testSubject.warn('BOOM')
    expect(console.log).toBeCalledWith(expectedWarnMessage)
  })

  test('#info - Should be printed in white on blue background', () => {
    testSubject.info('BOOM')
    expect(console.log).toBeCalledWith(expectedInfoMessage)
  })

  test('#debug - Should be printed in whitw on green background', () => {
    testSubject.debug('BOOM')
    expect(console.log).toBeCalledWith(expectedDebugMessage)
  })

  test('#error - Should be printed in blinking, black on red background', () => {
    testSubject.error('BOOM')
    expect(console.log).toBeCalledWith(expectedErrorMessage)
  })
})
