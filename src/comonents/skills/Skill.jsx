import React from 'react'

const Skill = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex">
          <div className="w-1/4 hidden lg:flex flex-col items-center pr-8">
            <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-pink-500 relative"></div>
            <div className="absolute left-0 top-10 -translate-x-1/2">
              <div className="bg-black border-2 border-gray-700 rounded-full w-8 h-8"></div>
            </div>
            <h2 className="text-6xl font-bold mt-8 text-gray-400">2024</h2>
          </div>

          <div className="w-full lg:w-3/4">
            <p className="text-sm text-gray-300 text-center lg:text-left mb-8">Built and launched Aceternity UI and Aceternity UI Pro from scratch</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-4 shadow-lg">
                <img src="https://assets.aceternity.com/templates/startup-1.webp" alt="project" className="w-full h-48 object-cover rounded-md" />
              </div>
              <div className="bg-white/5 rounded-xl p-4 shadow-lg">
                <img src="https://assets.aceternity.com/templates/startup-2.webp" alt="project" className="w-full h-48 object-cover rounded-md" />
              </div>
              <div className="bg-white/5 rounded-xl p-4 shadow-lg">
                <img src="https://assets.aceternity.com/templates/startup-3.webp" alt="project" className="w-full h-48 object-cover rounded-md" />
              </div>
              <div className="bg-white/5 rounded-xl p-4 shadow-lg">
                <img src="https://assets.aceternity.com/templates/startup-4.webp" alt="project" className="w-full h-48 object-cover rounded-md" />
              </div>
            </div>

            <section className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                <li>✅ Card grid component</li>
                <li>✅ Startup template Aceternity</li>
                <li>✅ Random file upload</li>
                <li>✅ New design system tokens</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
