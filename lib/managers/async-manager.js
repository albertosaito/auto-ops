import Promise from 'bluebird'
import request from 'request'

export async function getMockUsers () {
  const result = await requestMockUsers()
  return result.body
}

function requestMockUsers () {
  const GET = Promise.promisify(request.get)
  const mockUsersOptions = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get'
  }
  return GET(mockUsersOptions)
}
