import React from 'react'
import {Provider} from 'react-redux'
import store from 'store'
import NormalizeCSS from 'themes/NormalizeCSS'
import MainCSS from 'themes/MainCSS'
import ThemeProvider from 'themes/ThemeProvider'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import routes from './routes'
import MultiRouter from 'routes/MultiRouter'

const App = () => {
  return (
    <Provider store={store()}>
      <ThemeProvider>
        <NormalizeCSS />
        <MainCSS />
        <Router basename="/portfolio">
          <Switch>
            {routes.map((route, key) => (
              <MultiRouter key={key} {...route} />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
