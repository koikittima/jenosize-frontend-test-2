import React from 'react'
import Head from 'next/head'
function Header({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" description={description} />
      <meta name="keywords" keywords={keywords} />
      <meta name="robots" content="index,follow" />
      <meta name="image" content={process.env.NEXT_HEADER_IMG} />
    </Head>
  )
}

export default Header
