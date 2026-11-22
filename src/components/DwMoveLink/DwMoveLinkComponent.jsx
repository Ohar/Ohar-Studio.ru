import React from 'react'
import { Link } from '@/components/NextLink'

import generateDwMovePath from '@/utils/generateDwMovePath'

const DwMoveLinkComponent = ({id, name, classId, children = ''}) => (
  <Link
    className='DwMoveLink'
    to={generateDwMovePath(id, classId)}
  >{children || name}</Link>
)

export default DwMoveLinkComponent
