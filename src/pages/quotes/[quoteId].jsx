import quotesList from "@/constants/quotesList.json"
import QuotePageTemplate from "@/templates/QuotePageTemplate"

export const getStaticPaths = () => ({
  fallback: false,
  paths: quotesList.map((_, quoteId) => ({
    params: { quoteId: String(quoteId) },
  })),
})

export const getStaticProps = ({ params }) => ({
  props: {
    pageContext: { slug: Number(params.quoteId) },
  },
})

export default QuotePageTemplate
