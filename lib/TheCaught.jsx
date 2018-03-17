'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheCaughtStyle from './TheCaughtStyle'
import { TheCondition } from 'the-condition'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Component to show caught errors
 */
class TheCaught extends React.Component {
  render () {
    const {props} = this
    const {
      className,
      children,
      error,
      info,
    } = props
    const {componentStack} = info || {}
    if (!error) {
      return null
    }
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-caught', className)}
      >
        <h3 className='the-caught-title'
            role='heading'
        >{String(error.message || error)}</h3>
        {children}
        <TheCondition if={!!componentStack}>
          <p className='the-caught-stack'>
            {componentStack}
          </p>
        </TheCondition>
      </div>
    )
  }
}

TheCaught.Style = TheCaughtStyle

TheCaught.propTypes = {
  /** Caught error */
  error: PropTypes.string,
  /** Error Info */
  info: PropTypes.object
}

TheCaught.defaultProps = {
  error: null,
  info: null,
}

TheCaught.displayName = 'TheCaught'

export default TheCaught
