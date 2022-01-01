import '@/css/tailwind.css'
import Head from 'next/head'
import script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <div className="pb-12 antialiased bg-black">
      <Head>
        < script
        async
        defer
        data-domain = "rulebox.io"
        src = "https://plausible.io/js/plausible.js"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/atom.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
      </Head>
        <Component {...pageProps} />
    </div>
  )
}
