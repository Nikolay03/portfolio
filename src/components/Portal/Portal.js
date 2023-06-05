import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Portal extends React.Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
    // this.el.style.position = 'absolute'
    // this.el.style.top = '0'
    // this.el.style.left = '0'
    // this.el.style.width = '100%'
  }

  componentDidMount () {
    document.body.appendChild(this.el)
  }

  componentWillUnmount () {
    document.body.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

Portal.propTypes = {
  children: PropTypes.node
}

export default Portal
