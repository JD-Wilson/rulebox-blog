import Link from 'next/link'

export default function Header() {
  return (
    <div className="">
    <div className="absolute w-full flex h-32">
      <div
        className="
          w-full
          flex-grow
          bg-gradient-to-r
          from-hero-100
          via-hero-500
          to-hero-900
          h-32
          blur-3xl
        "
      ></div>
    </div>
    {/* <div className="w-3/4 flex fixed bottom-5 left-5 justify-center">
      <svg className="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="250"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="375"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="500"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="625"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="750"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="875"
        />
      </svg>
    </div> */}

    <header
      className="relative flex justify-between max-w-7xl ml-auto mr-auto py-8"
    >
      <Link href="/">
      <span className="text-white text-xl font-bold flex items-center cursor-pointer">
        Rulebox
      </span>
      </Link>
      <span className="flex items-center space-x-12">
        <span className="text-white text-sm">Changelog</span>
        <span className="text-white text-sm">About us</span>
        <span className="text-white text-sm">We're hiring</span>
      </span>
      <button
        className="
          text-white
          py-1
          px-6
          border
          text-sm
          rounded-full
          bg-white bg-opacity-10
          border-opacity-50
        "
      >
        Login
      </button>
    </header>
  </div>
  )
}
