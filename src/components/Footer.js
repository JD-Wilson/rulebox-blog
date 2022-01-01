import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: 'https://rulebox.io/' },
    { name: 'Blog', href: 'https://blog.rulebox.io/' },
    { name: 'Contact', href: 'mailto:accounts@rulebox.io' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/rulebox_io',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    }
  ],
}

export default function Footer() {
  return (
      <div className="divide-y divide-gray-500 ">
        <section className="bg-black">
      <div className="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
            Beta Access
          </h2>
          <p className="max-w-2xl mt-3 text-lg leading-6 text-gray-200">
            Rulebox is launching soon.Sign up for early access to the latest features and releases.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex" action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <label htmlFor="mce-EMAIL" className="sr-only">
                Email address
              </label>
                <a href="https://rulebox.io" target="_blank" className="px-6 py-1 text-sm text-white bg-white border border-opacity-50 rounded-full bg-opacity-10">Register for access &rarr;</a>
            </form>
          <p className="max-w-sm mt-3 text-sm text-gray-400">
            We care about the protection of your data. We will never share your email address with anyone else.
          </p>
        </div>
      </div>
        </section>


        
    <footer className="bg-black">
      <div className="max-w-3xl px-4 py-6 mx-auto overflow-hidden lg:px-8 sm:px-6 xl:max-w-5xl xl:px-0">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-white hover:text-gray-600">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-4 space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-gray-600">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-4 text-base text-center text-gray-400">&copy; Rulebox.io</p>
      </div>
    </footer>
    </div>
    )
}