import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { wrapper } from '../redux/store'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'

function MyApp({ Component, pageProps }) {

  const [docCatrgories, setDocCatrgories] = useState([])

  return (
    <div className="font-fam">
      <Head>
        <title>Jenosize</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1'/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" ></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"></link>
      </Head>
      <Nav docCatrgories={docCatrgories || []} />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(appWithTranslation(MyApp))
