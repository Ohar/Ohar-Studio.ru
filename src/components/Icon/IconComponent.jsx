import React from "react"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconComponent = ({icon, className = ''}) => icon
  ? (
    typeof icon === 'string'
      ? <span className={`${icon} Icon ${className}`}/>
      : <FontAwesomeIcon icon={icon} className={`Icon ${className}`}/>
  )
  : null

IconComponent.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

IconComponent.defaultProps = {
  icon: '',
}

export default IconComponent
