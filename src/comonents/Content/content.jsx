import React from 'react'
import { useNavigate } from 'react-router-dom' //for on click

export default function ContentPage() {
  const items = [
    {
      title: 'React State Management',
      description: 'Learn how to manage state effectively in your React applications with our comprehensive tools.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20260409122445299656/1.webp',
      date: '2025-04-09',
      link: 'https://www.geeksforgeeks.org/',
    },
    {
      title: 'JWT Proofreading',
      description: 'Json Web Token (JWT) proofreading for secure and error-free token management.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20250908173351627043/client.webp',
      date: '2025-02-08',
      link: '',
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate with various APIs to enhance your content capabilities.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20251215114155566486/frame_3258.webp',
      date: '2025-01-03',   
      link: '',
    },
    {
      title: 'MongoDB Management',
      description: 'Efficiently manage your MongoDB databases with our intuitive tools.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20250703171634692371/MongoDB-Features.webp',
      date: '2024-12-06',
      link: '',
    },
    {
      title: 'Text Summarization',
      description: 'Summarize your lengthy documents with AI technology.',
      image: 'https://tse1.mm.bing.net/th/id/OIP.mwIp6QanC3uvd6FpN95rbgHaDt?pid=Api&P=0&h=180',
      date: '2024-10-05',
      link: '',
    },
    {
      title: 'Node.js Scripting',
      description: 'Create powerful scripts using Node.js to automate your content workflows.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20260422121133520564/run_time_environment.webp',
      date: '2024-09-04',
      link: '', 
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-[font2] text-4xl lg:text-6xl text-center uppercase mb-8">Content Tools</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="rounded-xl border border-neutral-700 p-6 bg-neutral-900/30 overflow-hidden"
            >
              <div className="h-40 mb-4 rounded-md overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500">
                <img src={it.image} alt="" className="w-full h-full object-cover opacity-90" />
              </div>
              <h2 className="font-semibold text-lg mb-2">{it.title}</h2>
              <p className="text-sm text-neutral-300 mb-4">{it.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-neutral-400">{it.date}</div>
                {/* <button onClick={() => navigate(it.link)} className="px-3 py-1 rounded-full bg-[#D3FD50] text-black text-sm" target="_blank" rel="noopener noreferrer"> */}
                
                {/* <button
                    onClick={() => window.open(it.link, "_blank")}
                    className="px-3 py-1 rounded-full bg-[#D3FD50] text-black text-sm"
                >
                  Try
                </button> */}

                     {/*OR */}

                {it.link ? (
                <a
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-[#a950fd] text-[#ffffff] text-sm"
                >
                   Try
                </a>
                ) : (
                <span className="px-3 py-1 rounded-full bg-gray-600 text-sm cursor-not-allowed">
                   Not Ready
                </span>
                )}


              </div>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-neutral-700 p-6 bg-neutral-900/30">
          <h3 className="font-semibold text-xl mb-4">Sentiment Analysis</h3>
          <p className="text-neutral-300 mb-6">Understand the sentiment of your text using built-in AI models and visual results.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 rounded-lg bg-neutral-800/40 p-4">
              <div className="flex gap-3 items-start">
                <div className="rounded-es-2xl bg-gradient-to-r from-pink-500 to-violet-500 h-12 w-12" />
                <div>
                  <div className="text-sm text-neutral-200 font-semibold">Just code in Vanilla Javascript</div>
                  <div className="inline-block mt-2 text-xs text-red-400 border border-red-500 rounded-full px-2 py-0.5">Delusional</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-neutral-800/40 p-4">
              <div className="flex gap-3 items-start">
                <div className="rounded-t-full bg-gradient-to-r from-pink-500 to-violet-500 h-12 w-12" />
                <div>
                  <div className="text-sm text-neutral-200 font-semibold">There are a lot of cool frameworks out there</div>
                  <div className="mt-2 text-xs text-neutral-400">Use PHP.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
