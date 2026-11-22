import React from 'react'
import { Link } from '@/components/NextLink'

import generateQuotePath from './utils/generateQuotePath'

const QuotesComponent = ({ quote, isNextBtnEnabled, isPrevBtnEnabled, quoteId, getRandomQuoteNum }) => (
  <section className='QuotesComponent'>
    <div className='buttons'>
      {
        isPrevBtnEnabled
          ? (
            <Link
              to={generateQuotePath(quoteId - 1)}
              title={'Предыдущая цитата \n (Нажмите стрелку влево)'}
              className='buttons_arrow'
            >
              ←
            </Link>
          )
          : <span className='buttons_arrow buttons_arrow-inactive'>←</span>
      }

      <Link to={generateQuotePath(getRandomQuoteNum())}>
        Случайная цитата
      </Link>

      {
        isNextBtnEnabled
          ? (
            <Link
              to={generateQuotePath(quoteId + 1)}
              title={'Следующая цитата\n(Нажмите стрелку вправо)'}
              className='buttons_arrow'
            >
              →
            </Link>
          )
          : <span className='buttons_arrow buttons_arrow-inactive'>→</span>
      }
    </div>

    {
      quote
        ? (
          <blockquote className='quote'>
            <a
              className='quote_link'
              href={`#${quoteId}`}
            >
              №&thinsp;{quoteId}
            </a>
            <p
              className='quote_text'
              dangerouslySetInnerHTML={{__html: quote.text}}
            />
            <cite className='quote_cite'>
              <a
                className='quote_origin'
                target='_blank'
                href={quote.url}
                rel='nofollow noopener noreferrer'
              >
                {quote.author}
              </a>
            </cite>
          </blockquote>
        )
        : null
    }
  </section>
)

export default QuotesComponent
