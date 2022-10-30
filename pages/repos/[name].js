import Header from '../../components/header'
import showdown from 'showdown'

export async function getStaticPaths() {
  const url = process.env.GITHUB_URL
  const myHeaders = {
      'Content-Type': 'application/json',
      'Authorization': process.env.GITHUB_TOKEN,
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: myHeaders
  })
  const repos = await res.json()
  const paths = repos.map((repo) => ({
    params: { name: repo.name },
  }))

  return {
    paths, fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://raw.githubusercontent.com/uvacoder/${params.name}/master/README.md`)
  const readme = await res.text()
  let showdown  = require('showdown'),
    converter = new showdown.Converter(),
    readmeHtml      = converter.makeHtml(readme);
  return { props: { readmeHtml } }
}

export default function Repo({ readmeHtml }) {
  return (
    <div className="md" dangerouslySetInnerHTML={{__html: readmeHtml}}>
    </div>
  )
}
