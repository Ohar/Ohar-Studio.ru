import React from 'react'

import Operative from '@/components/TC/Operative'

const OperativeList = ({ idList }) => (
  <ul className='OperativeList'>
    {idList.map(
      (id) => <li className='OperativeList_item'><Operative id={id} key={id}/></li>
    )}
  </ul>
)

export default OperativeList
