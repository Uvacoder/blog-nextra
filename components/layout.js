import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head />
        <title>holovin</title>
        <meta name="description" content="Viktor Holovin" />
        <link rel="icon" href="/favicon.ico" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
