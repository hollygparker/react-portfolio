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
      href: 'https://goodweeds.herokuapp.com/',
      repo: 'github',
      imageSrc: 'https://user-images.githubusercontent.com/67671637/192348054-1213ed5c-ea06-485d-a69b-8310388130ca.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'INtertain',
      href: '#',
      repo: 'github',
      imageSrc: 'https://github.com/NW-Bootcamp-Team1/Night-In/raw/main/assets/Homepage.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Work Day Scheduler',
      href: 'https://hollygparker.github.io/hw5-WorkDayScheduler/',
      repo: 'GITHUB',
      imageSrc: 'https://user-images.githubusercontent.com/67671637/179055125-894563b3-48ab-4b6a-bd83-a999de753163.png',
      imageAlt: 'Person using a pen to cross a task off a projectsivity paper card.',
    },
    {
      id: 4,
      name: 'J.A.T.E',
      href: 'https://jate-text-editor-404.herokuapp.com/',
      repo: 'https://github.com/hollygparker/PWA-TextEditor-JATE',
      imageSrc: 'https://user-images.githubusercontent.com/67671637/197890701-91ede160-d31e-4e7a-974f-e00e6fa873ea.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More projects...
  ]
  
  export default function Projects() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Projects</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {projects.map((projects) => (
              <a key={projects.id} href={projects.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={projects.imageSrc}
                    alt={projects.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{projects.name}</h3>
                <a className="mt-1 text-lg font-medium text-gray-900">{projects.repo}</a>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  