import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/logo.jpg'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/SectionContainer'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <>
        <Header />
      <SectionContainer>
        <main>
          <div className="">
            <Head>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@Rulebox_io" />
              <meta name="twitter:creator" content="@Rulebox_io" />
              <meta name="twitter:title" content="Rulebox.io Blog" />
              <meta name="twitter:description" content="News content from the rulebox team." />
              <meta name="twitter:image" content={`https://rulebox.io${twitterCard}`} />
              <meta property="og:url" content="https://rulebox.io/blog" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content="Rulebox.io Blog" />
              <meta property="og:description" content="News content from the rulebox team." />
              <meta property="og:image" content={`https://rulebox.io/blog${twitterCard}`} />
              <title>Rulebox.io Blog</title>
              <meta name="description" content="News content from the rulebox team." />
            </Head>
            <div className="text-center mt-12">
              <h1 className="text-3xl font-extrabold text-white tracking-wide sm:text-5xl">
                 Latest updates
              </h1>
              <p className="mt-3 max-w-3xl mx-auto text-xl text-white sm:mt-4">
                The latest product news, straight from the Rulebox team.
              </p>
            </div>

            {/* Start of new */}
            <div className="mt-8 max-w-5xl mx-auto grid gap-5 xl:grid-cols-3 sm:grid-cols-2 lg:max-w-none pt-4 transform">
              {posts.map(({ link, module: { default: Component, meta } }) => {
                return (
                  <div key={link} className="">
                    <Link href={link}>
                      <a
                        className="text-white hover:text-gray-700"
                        aria-label={`Read "${meta.title}"`}
                      >
                        <div className="flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg bg-black border border-gray-700">
                          <div className="shrink grow-0">
                            <div className="h-48 w-full object-cover">
                              <img
                                src={meta.image}
                                alt=""
                                className="h-48 w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 bg-black p-6 flex flex-col justify-between">
                              <div className="flex-1">
                                <div className="block">
                                  <a href="#" className="text-xl font-semibold text-white line-clamp-1">
                                    {meta.title.replace(/ ([^ ]+)$/, '\u00A0$1')}
                                  </a>
                                </div>
                                <p className="mt-3 text-base text-white line-clamp-4">
                                  <Component />
                                </p>
                                
                                <div className="mt-6 md:flex items-center hidden">
                                  <div className="flex-shrink-0">
                                    <a>
                                      {meta.authors.map((author) => (
                                        <div>
                                          <span className="sr-only">Author Name</span>
                                          <a href={`https://twitter.com/${author.twitter}`}>
                                            <img
                                              className="h-10 w-10 rounded-full"
                                              src={author.avatar}
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      ))}
                                    </a>
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-600">
                                      <a className="">
                                        {meta.authors.map((author) => (
                                          <dl className="text-sm font-medium whitespace-no-wrap">
                                            <dt className="sr-only">Author Name</dt>
                                            <dd className="text-gray-500">
                                              <p
                                                className="text-white"
                                              >
                                                by {author.name}
                                              </p>
                                            </dd>
                                          </dl>
                                        ))}
                                      </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-600">
                                      <time dateTime={meta.date}>
                                        {postDateTemplate.render(new Date(meta.date))}
                                      </time>
                                      <span aria-hidden="true">&middot;</span>
                                      <span> {meta.readtime} </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                )
              })}
            </div>
            {/* End of new */}


          </div>
        </main>
      </SectionContainer>
      <Footer />
    </>
  )
}
