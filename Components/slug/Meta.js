import Head from 'next/head'

export default function Meta({post}) {
  return (
    <Head>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
      />
     <link rel="icon" href="../public/favicon.icon" />
      <meta lang='pt-BR'></meta>
      <title>{post}</title>
    </Head>
  )
}
