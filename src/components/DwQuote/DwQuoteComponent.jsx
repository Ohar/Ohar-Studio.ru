import React from 'react'
import arrify from 'arrify'

const DwQuoteComponent = (
  {
    className = '',
    children,
    author = null,
  },
) => (
  <blockquote className={`DwQuote ${className}`}>
    {arrify(children).map(
      (text, index) => (
        <p
          className='DwQuote__text'
          key={index}
        >
          {text}
        </p>
      )
    )}
    {author ? (
      <cite className='DwQuote__author'>— {author}</cite>
    ) : null}
  </blockquote>
)

export default DwQuoteComponent
