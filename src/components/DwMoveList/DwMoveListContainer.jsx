import React from 'react'

import { dwMoveCollection } from '@/constants/dwMoveList'
import sortByName from '@/utils/sortByName'

import DwMoveListComponent from './DwMoveListComponent'

const DwMoveListContainer = ({idList, ...props}) => {
  if (!idList || !idList.length) {
    return null
  }

  const moveList = idList
    .map(id => dwMoveCollection[id])
    .filter(e => e)
    .sort(sortByName);

  if (!moveList.length) {
    return null
  }

  return (
    <DwMoveListComponent
      {...props}
      list={moveList}
    />
  )
}

export default DwMoveListContainer
