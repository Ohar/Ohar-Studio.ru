import React from 'react'

import { dwMoveCollection } from '@/constants/dwMoveList'

import DwMoveLinkComponent from './DwMoveLinkComponent'

const DwMoveLinkContainer = ({id, children}) => {
  const move = dwMoveCollection[id]

  if (!move) {
    return `Ссылка на неизвестный ход: ${id}\n ${JSON.stringify(dwMoveCollection)}`
  }

  return (
    <DwMoveLinkComponent
      children={children}
      {...move}
    />
  )
}

export default DwMoveLinkContainer
