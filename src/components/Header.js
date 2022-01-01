import Link from 'next/link'

export default function Header() {
  return (
    <div className="">
      <div className="absolute flex w-full h-32">
        <div
          className="flex-grow w-full h-32 bg-gradient-to-r from-hero-100 via-hero-500 to-hero-900 lg:h-32 opacity-60 blur-2xl lg:blur-3xl"
        ></div>
      </div>
      <div className="absolute justify-center w-full h-full mx-auto inset bottom-32 lg:bottom-52">
        <svg className="max-w-3xl mx-auto xl:max-w-5xl" viewBox="0 0 1800 1800">
          <circle stroke="white" fill="none" strokeOpacity="0.2" cx="900" cy="900" r="250" />
          <circle stroke="white" fill="none" strokeOpacity="0.2" cx="900" cy="900" r="375" />
          <circle stroke="white" fill="none" strokeOpacity="0.2" cx="900" cy="900" r="500" />
          <circle stroke="white" fill="none" strokeOpacity="0.2" cx="900" cy="900" r="625" />
          <circle stroke="white" fill="none" strokeOpacity="0.2" cx="900" cy="900" r="750" />
          <circle stroke="white" fill="none" strokeOpacity="0.2" cx="900" cy="900" r="875" />
        </svg>
      </div>

      <header className="relative flex justify-between px-4 py-8 ml-auto mr-auto xl:max-w-5xl md:max-w-3xl lg:px-0">
        <Link href="/">
          <span className="flex items-center text-xl font-bold text-white cursor-pointer">
            Rulebox
          </span>
        </Link>
        <a
        href="https://twitter.com/rulebox_io"
        target="_blank"
        class="text-gray-400 hover:text-gray-100"
      >
        <span class="sr-only">Twitter</span>
        <svg
    class="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
    />
  </svg>
      </a>
      </header>
    </div>
  )
}
