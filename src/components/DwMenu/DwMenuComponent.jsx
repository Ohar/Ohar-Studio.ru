import React from 'react'

import dwPcClassList from '@/constants/dwPcClassList'
import sortByName from '@/utils/sortByName'

import DwClassLinks from './components/DwClassLinks'

const DwMenuComponent = () => (
  <section className='DwMenu'>
    <DwClassLinks/>
    {
      dwPcClassList
        .sort(sortByName)
        .map(
          ({ id }) => (
            <DwClassLinks
              key={id}
              classId={id}
            />
          ),
        )
    }
  </section>
)

export default DwMenuComponent
