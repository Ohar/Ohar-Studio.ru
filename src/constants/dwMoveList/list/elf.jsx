import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from '@/components/NextLink'

export default [
  {
    id: 'elf..',
    name: '',
    text: (
      <>
        TODO
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'elf',
    }),
  )
  .sort(sortByName)

const foo = `


`
