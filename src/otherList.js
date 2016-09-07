import { link } from './link.js'
import styles from './otherList.css'

let otherList = `
  <ul class='${styles.myList}'>
    <li>I still love CSS ${link}</li>
    <li>You still love CSS ${link}</li>
    <li>We still love CSS ${link}</li>
  </ul>
`

document.write(otherList)
