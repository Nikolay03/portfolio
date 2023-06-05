import React, {useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {languageAction} from 'actions/languageAction'
import {themeAction} from 'actions/themeAction'
import {worksAction} from './actions'
import HomeGrid from 'containers/Home/Grid'
import {prop} from 'ramda'

const enhance = compose(
  connect((state) => {
    const language = prop('language', state)
    const theme = prop('theme', state)
    const works = prop('works', state)
    return {
      language,
      theme,
      works
    }
  })
)

const HomeContainer = (props) => {
  const {
    dispatch,
    ...restProps
  } = props
  console.warn(restProps)
  // useEffects
  useEffect(() => {
    return () => {
      dispatch(worksAction({}))
    }
  }, [dispatch])

  // useHandlers
  const useHandlers = {
    setLanguage: (value) => {
      dispatch(languageAction(value))
    },
    setTheme: (value) => {
      dispatch(themeAction(value))
    }
  }

  return (
    <HomeGrid
      useHandlers={useHandlers}
      {...restProps}
    />
  )
}

export default enhance(HomeContainer)
