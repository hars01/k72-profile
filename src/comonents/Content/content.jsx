import React from 'react'

export default function ContentPage() {
  const items = [
    {
      title: 'AI Content Generation',
      description: 'Experience the power of AI in generating unique content.',
      image: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
    },
    {
      title: 'Automated Proofreading',
      description: 'Let AI handle the proofreading of your documents.',
      image: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    },
    {
      title: 'Contextual Suggestions',
      description: 'Get AI-powered suggestions based on your writing context.',
      image: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
    },
    {
      title: 'Sentiment Analysis',
      description: 'Understand the sentiment of your text with AI analysis.',
      image: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    },
    {
      title: 'Text Summarization',
      description: 'Summarize your lengthy documents with AI technology.',
      image: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
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
                <div className="text-xs text-neutral-400">Demo • 3 min</div>
                <button className="px-3 py-1 rounded-full bg-[#D3FD50] text-black text-sm">Try</button>
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
                <div className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 h-12 w-12" />
                <div>
                  <div className="text-sm text-neutral-200 font-semibold">Just code in Vanilla Javascript</div>
                  <div className="inline-block mt-2 text-xs text-red-400 border border-red-500 rounded-full px-2 py-0.5">Delusional</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-neutral-800/40 p-4">
              <div className="flex gap-3 items-start">
                <div className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 h-12 w-12" />
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
