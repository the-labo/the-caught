'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheCaught */
const TheCaughtStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-caught-style', className)}
            styles={TheCaughtStyle.data(options)}
  />
)

TheCaughtStyle.displayName = 'TheCaughtStyle'
TheCaughtStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheCaughtStyle.defaultProps = {
  options: {}
}

TheCaughtStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor
  } = options
  return asStyleData('.the-caught', {
    '&': {
      width: '100%',
      background: '#FEE',
      color: '#A55',
      border: '2px solid #A55',
      padding: '16px',
      borderRadius: '4px'
    },
    '.the-caught-stack': {
      background: '#FAFAFA',
      color: '#AAA',
      fontSize: 'small',
      padding: '4px',
      overflow: 'scroll',
      maxWidth: '100%',
      maxHeight: '50vh',
      borderRadius: '2px',
      border: '1px solid #F0F0F0',
    }
  })
}

export default TheCaughtStyle
