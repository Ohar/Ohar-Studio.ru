import React from "react"
import PropTypes from "prop-types"

import Layout from "@/components/Layout"

const EmptyHeader = () => null

const DwLayoutComponent = ({ children, hideHeader = true, ...props }) => {
  const headerProps = hideHeader ? { Header: EmptyHeader } : {}

  return (
    <Layout {...props} {...headerProps} className="DwLayout">
      {children}
    </Layout>
  )
}

DwLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
}

export default DwLayoutComponent
