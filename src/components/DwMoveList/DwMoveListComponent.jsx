import React from 'react'

import DwMove from '@/components/DwMove'

const DwMoveListComponent = ({className = '', list}) => (
  <ol className={`DwMoveList ${className}`}>
    {
      list.map(
        ({ id }) => (
          <li
            className='DwMoveList_item'
            key={id}
          >
            <DwMove id={id}/>
          </li>
        )
      )
    }
  </ol>
)

export default DwMoveListComponent
