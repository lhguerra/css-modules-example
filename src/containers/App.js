import React, { Component } from 'react'
import Link from '../components/Link/Link'
import styles from './App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>
          React is working :B
        </h1>
        <Link color="red" className={ styles.link }>
          Try out now!
        </Link>
      </div>
    )
  }
}
