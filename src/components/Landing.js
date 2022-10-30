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
                Hi, my name is holly. 
              </p>
              
            </div>
          </main>

<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
<img
  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
  alt=""
/>
</div>
</>
  )
}

export default Landing