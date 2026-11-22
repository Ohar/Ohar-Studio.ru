import React from 'react'
import PropTypes from 'prop-types'

import HeaderDefault from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutComponent = ({
  children,
  className = '',
  Header = HeaderDefault,
  hideHomeLink = false,
  hideLanguageSwitcher = false,
}) => (
  <section className={`Layout ${className}`}>
    <Header
      siteTitle="Ohar"
      hideHomeLink={hideHomeLink}
      hideLanguageSwitcher={hideLanguageSwitcher}
    />
    <main>{children}</main>
    <Footer/>
  </section>
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  hideHomeLink: PropTypes.bool,
  hideLanguageSwitcher: PropTypes.bool,
}

export default LayoutComponent
