import Header from '../../components/header'
import showdown from 'showdown'
import styles from "../../styles/md.module.css"

export async function getStaticPaths() {
  const res = await fetch(`https://api.github.com/users/holovin777/repos`)
  const repos = await res.json()
  const paths = repos.map((repo) => ({
    params: { name: repo.name },
  }))

  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://raw.githubusercontent.com/holovin777/${params.name}/master/README.md`)
  const readme = await res.text()
  let showdown  = require('showdown'),
    converter = new showdown.Converter(),
    readmeHtml      = converter.makeHtml(readme);
  return { props: { readmeHtml } }
}

export default function Repo({ readmeHtml }) {
  return (
    <>
      <div className="md" dangerouslySetInnerHTML={{__html: readmeHtml}}>
      </div>
    </>
  )
}
