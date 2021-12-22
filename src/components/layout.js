import * as React from "react"
import { Link } from "gatsby"

import siteMetadata from "../siteMetadata"
import "./BlogLayout.css"
import "./BlogIndexPage.css"

const Layout = ({ location, title, children }) => {
  console.log("CHILDREN", children)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container">
      <header>
        <h3 className="title">
          <Link href={isRootPath}>{siteMetadata.title}</Link>
        </h3>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout
