import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {appendParamsToUrl, paramsToSearch} from 'helpers/url'
import {path} from 'ramda'

const useQuery = (props) => {
  const {
    queries,
    withCurrentQueries = true
  } = props

  const history = useHistory()

  return () => {
    if (withCurrentQueries) {
      history.push({
        pathname: path(['location', 'pathname'], history),
        search: appendParamsToUrl(queries, path(['location', 'search'], history))
      })
    } else {
      history.push({
        pathname: path(['location', 'pathname'], history),
        search: paramsToSearch(queries)
      })
    }
  }
}

useQuery.propTypes = {
  queries: PropTypes.object,
  withCurrentQueries: PropTypes.bool
}

export default useQuery
