import React from 'react'

import { dwMoveCollection } from '@/constants/dwMoveList'

import DwMoveComponent from './DwMoveComponent'

const DwMoveContainer = ({id}) => {
  const move = dwMoveCollection[id]

  if (!move) {
    return `Неизвестный ход: ${id}\n ${JSON.stringify(dwMoveCollection)}`
  }

  return (
    <DwMoveComponent {...move} />
  )
}

export default DwMoveContainer
