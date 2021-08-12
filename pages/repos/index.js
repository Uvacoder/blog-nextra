import Header from '../../components/header'
import styles from '../../styles/list.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/holovin777/repos`)
  const repos = await res.json()

  return {
    props: { repos }, // will be passed to the page component as props
  }
}

export default function Repos({repos}) {
  return (
    <>
      <Header title="Repositories" />
      <div>
        <ul className={styles.list}>
          {repos.map((repo) => (
            <li className={styles.item}>
              <Link href={`/repos/${encodeURIComponent(repo.name)}`}>
                <a className={styles.link}>
                  {repo.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
