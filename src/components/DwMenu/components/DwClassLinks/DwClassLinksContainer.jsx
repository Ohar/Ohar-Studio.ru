import React from 'react'

import { dwPcClassCollection } from '@/constants/dwPcClassList'
import { commonMoveIdList, dwMoveCollection, dwMoveListByClassIdCollection } from '@/constants/dwMoveList'

import DwClassLinksComponent from './DwClassLinksComponent'

const DwClassLinksContainer = ({ classId }) => classId
  ? (
    <DwClassLinksComponent
      classId={classId}
      moveList={dwMoveListByClassIdCollection[classId]}
      name={dwPcClassCollection[classId].name}
    />
  )
  : (
    <DwClassLinksComponent
      classId='common'
      moveList={commonMoveIdList.map(id => dwMoveCollection[id])}
      name='Основные ходы'
    />
  )

export default DwClassLinksContainer
