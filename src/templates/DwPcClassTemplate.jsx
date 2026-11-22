import React from 'react'
import arrify from 'arrify'
import PropTypes from 'prop-types'

import DwLayout from '@/components/DwLayout'
import Seo from '@/components/Seo'
import DwPcClass from '@/components/DwPcClass'
import PageTitle from '@/components/PageTitle'

import { dwPcClassCollection } from '@/constants/dwPcClassList'
import { Link } from '@/components/NextLink'

const DwPcClassPageTemplate = ({dwPcClassId: dwPcClassIdInput, pageContext: {slug}}) => {
  const dwPcClassId = dwPcClassIdInput || slug
  const dwPcClass = dwPcClassCollection[dwPcClassId]

  if (!dwPcClass) {
    return (
      <DwLayout>
        Неизвестный id класса
      </DwLayout>
    )
  }

  const title = dwPcClass
    ? `${dwPcClass.name} | Класс Dungeon World`
    : 'Классы Dungeon World'

  const description = dwPcClass
    ? arrify(dwPcClass.description)[0]
    : 'Классы Dungeon World'

  return (
    <DwLayout>
      <Seo
        title={title}
        description={description}
      />
      <PageTitle>
        <Link to='/dw'>DW</Link>: {dwPcClass.name}
      </PageTitle>
      <DwPcClass id={dwPcClassId}/>
    </DwLayout>
  )
}

DwPcClassPageTemplate.propTypes = {
  dwPcClassId: PropTypes.string,
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }),
}

export default DwPcClassPageTemplate
