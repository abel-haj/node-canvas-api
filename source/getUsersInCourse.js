import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all users in course
 * @param {Number} accountId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of User objects: https://canvas.instructure.com/doc/api/users.html#User
 */

export default function getUsersInCourse (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
}
