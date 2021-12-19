import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/logo.jpg'
import Header from '@/components/Header'
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
              <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                 Latest updates
              </h1>
              <p className="mt-3 max-w-3xl mx-auto text-xl text-white sm:mt-4">
                The latest product news, straight from the Rulebox development team.
              </p>
            </div>

            {/* Start of new */}
            <ul className="pt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map(({ link, module: { default: Component, meta } }) => {
                return (
                  <li key={link} className="flex flex-col rounded-lg overflow-hidden hover:shadow-md my-2 border border-gray-700 border-opacity-75">
                    <div className="flex-shrink-0" id="image">
                {/* src={post.imageUrl} */}
                <img className="h-48 w-full object-cover" src={meta.image} alt="" />
              </div>
              <div className="flex-1 bg-grey-800 p-6 flex flex-col justify-between" id="summary">
                <div className="flex-1">
                  <Link href={link}>
                    <a
                      className="block mt-2 overflow-ellipsis overflow-hidden h-40"
                      aria-label={`Read "${meta.title}"`}
                    >
                    <p className="min-h-8 max-h-8 h-8 text-lg font-semibold leading-4 text-gray-200">{meta.title}</p>
                    <p className="mt-3 text-base text-gray-300 line-clamp-4"><Component /></p>
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a>
                      {meta.authors.map((author) => (
                        <div>
                          <span className="sr-only">Author Name</span>
                          <img className="h-10 w-10 rounded-full" src={author.avatar} alt="" />
                        </div>
                      ))}
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      <a className="">
                        {meta.authors.map((author) => (
                            <dl className="text-sm font-medium whitespace-no-wrap">
                              <dt className="sr-only">Author Name</dt>
                              <dd className="text-gray-500">
                                <a
                              href={`https://twitter.com/${author.twitter}`}
                              className="text-gray-600 hover:text-gray-700"
                            >
                              by {author.name}
                            </a>
                                </dd>
                            </dl>
                        ))}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={meta.date}>
                            {postDateTemplate.render(new Date(meta.date))}
                          </time>
                    </div>
                  </div>
                </div>
              </div>
                  </li>
                )
              })}
            </ul>
            {/* End of new */}


          </div>
        </main>
      </SectionContainer>
    </>
  )
}
