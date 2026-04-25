import React from 'react'
import { Link } from 'react-router-dom'

export default function InterestingCards() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold">Interesting Cards</h1>
          <p className="text-neutral-400 mt-2">A demo of a floating/tilt card effect using CSS perspective.</p>
        </div>

        <div
          className="group mx-auto w-full sm:w-[40rem]"
          style={{ perspective: 1200 }}>

          <div className="relative">
            <div
              className="rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-black/50"
              style={{ transformStyle: 'preserve-3d' }}>

              <div className="p-6">
                <div className="transform-gpu will-change-transform">
                  <h2 className="text-2xl font-extrabold">Make things float in air</h2>
                  <p className="text-neutral-400 mt-2">Hover over this card to unleash the power of CSS perspective</p>
                </div>

                <div className="mt-6 w-full">
                  <div
                    className="rounded-xl overflow-hidden transition-transform duration-500 ease-out group-hover:rotate-3"
                    style={{ transform: 'rotate(-8deg) translateZ(0)', transformOrigin: 'center' }}>
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="thumbnail"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <Link to="/" className="text-sm text-neutral-300">Try now →</Link>
                  <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold">Sign up</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
