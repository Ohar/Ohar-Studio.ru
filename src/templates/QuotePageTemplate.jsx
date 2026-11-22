import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Quotes from '@/components/Quotes'

import quotesList from "@/constants/quotesList"
import DEFAULT_QUOTE_ID from '@/constants/DEFAULT_QUOTE_ID'

const QuotePageTemplate = ({quoteId: quoteIdInput, pageContext: {slug}}) => {
  const quoteId = quoteIdInput || slug || DEFAULT_QUOTE_ID
  const quote = quotesList[quoteId]

  const title = quoteId
    ? `Цитата №${quoteId}`
    : 'Цитаты'

  const description = quote
    ? `${quote.text}\n© ${quote.author}`
    : 'Цитаты из разных источников'

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
      />
      <Quotes quoteId={quoteId}/>
    </Layout>
  )
}

QuotePageTemplate.defaultProps = {
  quoteId: DEFAULT_QUOTE_ID,
  pageContext: {
    slug: DEFAULT_QUOTE_ID,
  },
}

QuotePageTemplate.propTypes = {
  quoteId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pageContext: PropTypes.shape({
    slug: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
}

export default QuotePageTemplate
