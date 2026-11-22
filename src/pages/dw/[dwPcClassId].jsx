import dwPcClassList from "@/constants/dwPcClassList"
import DwPcClassPageTemplate from "@/templates/DwPcClassTemplate"

export const getStaticPaths = () => ({
  fallback: false,
  paths: dwPcClassList.map(({ id }) => ({
    params: { dwPcClassId: id },
  })),
})

export const getStaticProps = ({ params }) => ({
  props: {
    pageContext: { slug: params.dwPcClassId },
  },
})

export default DwPcClassPageTemplate
