import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all PageViews of a user
 * @param {Number} userId get pageviews of user.
 * @return {Promise} A promise that resolves to a list of PageView objects: https://canvas.instructure.com/doc/api/users.html#PageView
 */

export default function getUserPageViews (userId) {
  return fetchAll(canvasDomain + `/users/${userId}/page_views`)
}
