import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.link}>blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/repos">
            <a className={styles.link}>Repositories</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

