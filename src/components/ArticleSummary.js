import React from 'react'
import { Link } from 'react-navi'
import styles from './ArticleSummary.module.css'
import { formatDate } from '../utils/formats'

function ArticleSummary({ blogRoot, route }) {
  return (
      <article className={styles.ArticleSummary}>
          <div className={styles.TimeStamp}>
            <time dateTime={route.meta.date.toUTCString()}>{formatDate(route.meta.date)}</time>
        </div>
          <span><Link href={route.url.href}>{route.title}</Link></span>
          {/* <p>{route.data.spoiler}</p> */}
    </article>
  )
}

export default ArticleSummary
