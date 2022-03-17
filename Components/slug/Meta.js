import Head from 'next/head'

export default function Meta({post}) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon.ico"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/public/favicon.ico"
        color="#000000"
      />
      <link rel="shortcut icon" href="/public/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
      />
      <meta lang='pt-BR'></meta>
      <title>{post}</title>
    </Head>
  )
}
