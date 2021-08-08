import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/holovin777/repos`)
  const repos = await res.json()

  return {
    props: { repos }, // will be passed to the page component as props
  }
}

export default function Home({repos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>holovin</title>
        <meta name="description" content="Viktor Holovin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Viktor Holovin
        </h1>

        <p className={styles.description}>
          Repositories
        </p>

        <div className={styles.grid}>
          <ul>
            {repos.map((repo) => (
              <li>{repo.name} - {repo.language}</li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        blog.holovin.com
      </footer>
    </div>
  )
}
