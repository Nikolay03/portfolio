import * as actionTypes from 'constants/actionTypes'

export const worksAction = (payload) => {
  return {
    type: actionTypes.WORKS,
    payload
  }
}
