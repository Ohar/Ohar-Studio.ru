import React from 'react'

import DwQuote from '@/components/DwQuote'

const DwMoveComponent = ({id, name, text, quote = null, note = null}) => (
  <section
    className={`DwMove DwMove-${id}`}
    id={id}
  >
    <header className='DwMove__title'>{name}</header>
    <div className='DwMove__text'>{text}</div>

    {quote ? (
      <DwQuote author={quote.author}>
        {quote.text}
      </DwQuote>
    ) : null}

    {note ? (
      <div className='DwMove__note'>
        <header className='DwMove__noteTitle'>Примечание</header>
        {note}
      </div>
    ) : null}
  </section>
)

export default DwMoveComponent
