import {combineReducers} from 'redux'
import * as actionTypes from 'constants/actionTypes'
import * as STATES from 'constants/states'
import languageReducer from 'reducers/languageReducer'
import themeReducer from 'reducers/themeReducer'
import worksReducer from 'reducers/worksReducer'

export default combineReducers({
  [STATES.LANGUAGE]: languageReducer(actionTypes.LANGUAGE),
  [STATES.THEME]: themeReducer(actionTypes.THEME),
  [STATES.WORKS]: worksReducer(actionTypes.WORKS)
})
