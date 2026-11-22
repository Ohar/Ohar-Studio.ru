import React from 'react'

import { commonMoveIdList } from '@/constants/dwMoveList'
import DwMoveList from '@/components/DwMoveList'

const DwCommonMovesComponent = () => (
  <DwMoveList
    className='DwCommonMoves'
    idList={commonMoveIdList}
  />
)

export default DwCommonMovesComponent
