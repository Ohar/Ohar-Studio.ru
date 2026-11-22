import React from 'react'

const generateLimitText = limit => {
  if (!limit || limit === Infinity) {
    return '∞'
  } else {
    const max = typeof limit === 'object' ? limit.max : limit
    const min = typeof limit === 'object' ? limit.min : limit
    return max === min
      ? limit
      : `${min}–${max}`
  }
}

const Limit = ({ limit }) => (
  <span>{generateLimitText(limit)}</span>
)

export default Limit
