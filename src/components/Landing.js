import React from 'react'

function Landing() {
  return (
    <>
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Full Stack </span>{' '}
                <span className="block text-indigo-600 xl:inline">Engineer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              As a recent Northwestern Bootcamp Graduate, I am looking to pivot from a Client Care Specialist in the FinTech enviornment to a Software Engineer.
              </p>
              
            </div>
          </main>

<div className="lg:absolute lg:inset-y-11 lg:right-1 lg:w-1/2 mt-12 md:ml-60">
<img
  className="w-96 h-96 rounded-full mt-4 mx-7"
  src="https://ca.slack-edge.com/T03CHCNSHAT-U03GY6663U5-e6dd79c26eca-512"
  alt=""
/>
</div>
</>
  )
}

export default Landing