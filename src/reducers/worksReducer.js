import createReducer from 'reducers/createReducer'
import worksData from 'data/worksData'

const defaultState = worksData

export const actions = (actionName) => ({
  [`${actionName}`] (state, action) {
    return action.payload
  }
})

const worksReducer = (actionName) => {
  return createReducer(defaultState, actions(actionName))
}

export default worksReducer
