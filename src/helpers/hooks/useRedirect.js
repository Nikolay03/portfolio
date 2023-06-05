import {useHistory} from 'react-router-dom'
import {sprintf} from 'sprintf-js'
import {is} from 'ramda'
import {
  paramsToSearch,
  parseParams
} from 'helpers/url'
import PropTypes from 'prop-types'

const useRedirect = (props) => {
  const {
    redirectUrl,
    withCurrentQueries,
    newParams
  } = props

  const history = useHistory()
  const currentParams = parseParams(history.location.search)
  const allParams = withCurrentQueries && newParams ? {...currentParams, newParams} : withCurrentQueries ? {...currentParams} : newParams ? {...newParams} : {}

  return id => {
    if (is(Number, id)) {
      history.push({
        pathname: sprintf(redirectUrl, id),
        search: paramsToSearch(allParams)
      })
    } else if (is(Array, id)) {
      history.push({
        pathname: sprintf(redirectUrl, ...id),
        search: paramsToSearch(allParams)
      })
    } else {
      history.push({
        pathname: redirectUrl,
        search: paramsToSearch(allParams)
      })
    }
  }
}

useRedirect.propTypes = {
  redirectUrl: PropTypes.string,
  withCurrentQueries: PropTypes.bool,
  newParams: PropTypes.object
}

export default useRedirect
