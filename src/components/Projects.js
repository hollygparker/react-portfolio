/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const projects = [
    {
      id: 1,
      name: 'Good Weeds',
      live: 'https://goodweeds.herokuapp.com/',
      repo: 'https://github.com/The-Brain-Cell-Collective/goodWeeds',
      imageSrc: 'https://user-images.githubusercontent.com/67671637/192348054-1213ed5c-ea06-485d-a69b-8310388130ca.png',
      imageAlt: 'Screenshot of good weeds application',
    },
    {
      id: 2,
      name: 'INtertain',
      live: 'https://nw-bootcamp-team1.github.io/Night-In/home-page/index',
      repo: 'https://github.com/NW-Bootcamp-Team1/Night-In',
      imageSrc: 'https://github.com/NW-Bootcamp-Team1/Night-In/raw/main/assets/Homepage.png',
      imageAlt: 'Screenshot of INtertain application',
    },
    {
      id: 3,
      name: 'Work Day Scheduler',
      live: 'https://hollygparker.github.io/hw5-WorkDayScheduler/',
      repo: 'https://github.com/hollygparker/hw5-WorkDayScheduler',
      imageSrc: 'https://user-images.githubusercontent.com/67671637/179055125-894563b3-48ab-4b6a-bd83-a999de753163.png',
      imageAlt: 'Screenshot of work day schedulerapplication',
    },
    {
      id: 4,
      name: 'J.A.T.E',
      live: 'https://jate-text-editor-404.herokuapp.com/',
      repo: 'https://github.com/hollygparker/PWA-TextEditor-JATE',
      imageSrc: 'https://user-images.githubusercontent.com/67671637/197890701-91ede160-d31e-4e7a-974f-e00e6fa873ea.png',
      imageAlt: 'Screenshot of JATE application',
    },
    {
        id: 5,
        name: 'Weather Dashboard',
        live: 'https://hollygparker.github.io/WeatherDashboard/',
        repo: 'https://github.com/hollygparker/WeatherDashboard',
        imageSrc: 'https://user-images.githubusercontent.com/67671637/180467183-c0857cf8-f933-46e9-b60c-258dba628447.png',
        imageAlt: 'Screenshot of Weather dashboard application',
    },
      {
        id: 6,
        name: 'Password Generator',
        live: 'https://hollygparker.github.io/PasswordGenerator/',
        repo: 'https://github.com/hollygparker/PasswordGenerator',
        imageSrc: 'https://user-images.githubusercontent.com/67671637/176048563-7c64738f-066a-484f-ae75-0b078baec5b9.png',
        imageAlt: 'Screenshot of passsword Generator application',
    },
  ]
  
  export default function Projects() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Projects</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {projects.map((projects) => (
              <a key={projects.id} href={projects.live} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={projects.imageSrc}
                    alt={projects.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-700">{projects.name}</h3>
                <a className="mt-1 text-lg font-medium text-purple-900 hover:text-purple-300" href={projects.repo}>GitHub Repo</a>
                <a className="ml-9 text-lg font-medium text-purple-900 hover:text-purple-300" href={projects.live}>Live Site</a>

              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  