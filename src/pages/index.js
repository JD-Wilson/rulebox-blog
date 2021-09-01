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
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <div className="divide-y">
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
            <div className="py-6 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[3rem] md:leading-[3.5rem]">
                 Latest updates
              </h1>
              <p className="text-lg text-gray-500">
                The latest product news, straight from the Rulebox development team.
              </p>
            </div>

            {/* Start of new */}
            <ul className="pt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map(({ link, module: { default: Component, meta } }) => {
                return (
                  <li key={link} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl my-2">
                    <div className="flex-shrink-0" id="image">
                {/* src={post.imageUrl} */}
                <img className="h-48 w-full object-cover" src={meta.image} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between" id="summary">
                <div className="flex-1">
                  <Link href={link}>
                    <a
                      className="block mt-2 overflow-ellipsis overflow-hidden h-52"
                      aria-label={`Read "${meta.title}"`}
                    >
                    <p className="text-xl font-semibold text-violet-700">{meta.title}</p>
                    <p className="mt-3 text-base text-gray-500"><Component /></p>
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
                    <p className="text-sm font-medium text-violet-800">
                      <a className="">
                        {meta.authors.map((author) => (
                            <dl className="text-sm font-medium whitespace-no-wrap">
                              <dt className="sr-only">Author Name</dt>
                              <dd className="text-violet-500">
                                <a
                              href={`https://twitter.com/${author.twitter}`}
                              className="text-violet-600 hover:text-violet-700"
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
