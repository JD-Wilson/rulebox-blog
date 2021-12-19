import Link from 'next/link'

export default function Header() {
  return (
    <div>
    <div class="absolute w-full flex h-32">
      <div
        class="
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
    {/* <div class="absolute w-full flex justify-center">
      <svg class="circles" viewBox="0 0 1800 1800">
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
      class="relative flex justify-between max-w-7xl ml-auto mr-auto py-8"
    >
      <span class="text-white text-xl font-bold flex items-center">
        Rulebox
      </span>
      <span class="flex items-center space-x-12">
        <span class="text-white text-sm">Changelog</span>
        <span class="text-white text-sm">About us</span>
        <span class="text-white text-sm">We're hiring</span>
      </span>
      <button
        class="
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
