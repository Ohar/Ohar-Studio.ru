import React from 'react'

import { dwNoteCollection } from '@/constants/dwNoteList'

const DwNoteComponent = ({noteId}) => {
  if (!noteId) {
    return null
  }

  const note = dwNoteCollection[noteId]

  if (!note) {
    return null
  }

  const { text } = note

  if (!text) {
    return null
  }

  return (
    <section className='DwNote'>
      <hr/>
      <header className='DwNote_title'>Примечания</header>
      {text}
    </section>
  )
}

export default DwNoteComponent
