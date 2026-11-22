import NextLink from "next/link"
import Router from "next/router"
import React, { forwardRef } from "react"

const Link = forwardRef(function Link(
  { to, href, children, ...props },
  reference
) {
  return (
    <NextLink ref={reference} href={to || href} {...props}>
      {children}
    </NextLink>
  )
})

const navigate = (to) => Router.push(to)

export { Link, navigate }
