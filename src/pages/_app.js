import '@/css/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased bg-violet-50 pb-12">
      <Head>
        {/* Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-99332063-3"></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-99332063-3');`
            }}
          /> */}
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
