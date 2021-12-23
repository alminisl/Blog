import * as React from "react"
import { Link } from "gatsby"

import siteMetadata from "../siteMetadata"
import "./BlogLayout.css"
import "./BlogIndexPage.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  console.log("isRooth path", isRootPath)
  let header
  let titleOfBlog
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{siteMetadata.title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {siteMetadata.title}
      </Link>
    )
  }

  if (isRootPath) {
    titleOfBlog = (
      <h3 className="title">
        <Link to="/">{siteMetadata.title}</Link>
      </h3>
    )
  } else {
    titleOfBlog = (
      <h3 className="title-blogpost ">
        <Link to="/">{siteMetadata.title}</Link>
      </h3>
    )
  }

  return (
    <div className="container">
      <header>{titleOfBlog}</header>

      <main>{children}</main>
    </div>
  )
}

export default Layout
