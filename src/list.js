import { link } from './link.js'
import styles from './list.css'

let list = `
  <ul class='${styles.myList}'>
    <li>I love CSS ${link}</li>
    <li>You love CSS ${link}</li>
    <li>We love CSS ${link}</li>
  </ul>
`

document.write(list)
