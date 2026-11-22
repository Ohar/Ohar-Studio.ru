import React from 'react'
import { Link } from '@/components/NextLink'

import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import generateDwMovePath from '@/utils/generateDwMovePath'

const DwClassLinksComponent = (
  {
    classId,
    moveList,
    name,
  },
) => (
  <section className='DwClassLinks'>
    <header className='DwClassLinks__title'>
      {moveList && moveList.length ? (
        <Link
          className='DwClassLinks__headLink'
          to={generateDwPcClassPathById(classId)}
        >
          {name}
        </Link>
      ) : name}
    </header>
    <ul className='DwClassLinks__moveList'>
      {moveList && moveList.length ? moveList.map(
        move => (
          <li
            className='DwClassLinks__item'
            key={move.id}
          >
            <Link
              className='DwClassLinks__itemLink'
              to={generateDwMovePath(move.id, classId)}
            >
              {move.name}
            </Link>
          </li>
        ),
      ) : 'TODO'}
    </ul>
  </section>
)

export default DwClassLinksComponent
