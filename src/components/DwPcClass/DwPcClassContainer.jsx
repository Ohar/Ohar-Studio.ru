import React from 'react'

import { dwPcClassCollection } from '@/constants/dwPcClassList'
import DwPcClassComponent from './DwPcClassComponent'

const DwPcClassContainer = ({id}) => {
  const dwPcClass = dwPcClassCollection[id]

  if (!dwPcClass) {
    return 'Неизвестный id класса персонажа DW'
  }

  return (
    <DwPcClassComponent {...dwPcClass}/>
  )
}

export default DwPcClassContainer
