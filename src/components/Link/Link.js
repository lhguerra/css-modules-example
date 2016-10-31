import React from 'react'
import styles from './Link.css'
import classnames from 'classnames'

export const Link = ({
  children,
  color,
  className,
}) => (
  <a
    className={
      classnames(
        styles.link,
        styles[color],
        className
      )
    }
    href='#'
  >
    { children }
  </a>
)

export default Link
