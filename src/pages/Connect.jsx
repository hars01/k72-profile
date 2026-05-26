import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// form state
export default function Connect() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const testimonials = [
    {
      quote: "The AI-powered insights have helped us close 40% more deals. It's like having a superpower for sales.",
      name: 'Marcus Johnson',
      title: 'VP of Sales, StartupXYZ',
      avatar: 'https://i.pravatar.cc/64?img=12'
    },
    {
      quote: "Working with this team accelerated our roadmap by months — the product is beautiful and fast.",
      name: 'Ava Martinez',
      title: 'Product Lead, BrightApps',
      avatar: 'https://i.pravatar.cc/64?img=32'
    },
    {
      quote: "Their design sensibility turned complex ideas into delightful experiences for our users.",
      name: 'Liam O\'Connor',
      title: 'Founder, NovaCo',
      avatar: 'https://i.pravatar.cc/64?img=44'
    }
  ]

  // continuous marquee will handle sliding automatically via CSS animation

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Please fill name, email and message.' })
      return
    }

    setSending(true)
    try {
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
      // const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''

      const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
      const OWNER_TEMPLATE_ID = import.meta.env.VITE_Owner_EMAILJS_TEMPLATE_ID || ''

      const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || ''

      // if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) 
      if (!EMAILJS_SERVICE_ID || !USER_TEMPLATE_ID || !OWNER_TEMPLATE_ID || !EMAILJS_USER_ID){
        setStatus({ ok: false, msg: 'EmailJS env vars missing. Restart dev server after updating .env.' })
        setSending(false)
        return
      }

      // First: send notification to owner with full details
      const ownerPayload = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: OWNER_TEMPLATE_ID,
        user_id: EMAILJS_USER_ID,
        template_params: {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          message: form.message,
          to_email: 'hiharshtech@gmail.com'
        }
      }

      const ownerRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ownerPayload)
      })

      if (!ownerRes.ok) {
        const text = await ownerRes.text().catch(() => '')
        console.error('EmailJS owner error', ownerRes.status, text)
        setStatus({ ok: false, msg: `Notification failed (${ownerRes.status}): ${text || 'see console'}` })
        return
      }

      // Second: send greeting/confirmation to the user who submitted the form
      const userPayload = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: USER_TEMPLATE_ID,
        user_id: EMAILJS_USER_ID,
        template_params: {
          from_name: `${form.name}`,
          from_email: 'noreply@yourdomain.com',
          company: 'Harsh Mishra Portfolio',
          message: form.message,
          to_email: form.email
        }
      }
       
      // Note: this is optional — even if it fails, the owner already got the notification, so we show partial success to user
      const userRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userPayload)
      })

      // If user confirmation email fails, log the error but still show success to user since owner got notified
      if (!userRes.ok) {
        const text = await userRes.text().catch(() => '')
        console.error('EmailJS user error', userRes.status, text)
        // Owner already got the notification — show partial success to user
        setStatus({ ok: true, msg: 'Notification sent. Confirmation email to user failed.' })
        setForm({ name: '', email: '', company: '', message: '' })
        return
      }

      setStatus({ ok: true, msg: 'Message sent — confirmation emailed and notification delivered.' })
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error('Email send failed', err)
      setStatus({ ok: false, msg: `Failed to send message: ${err.message || err}` })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center mt-15 p-8">
      <style>{`
        @keyframes floatY { 0% { transform: translateY(0);} 50% { transform: translateY(-12px);} 100% { transform: translateY(0);} }
        .card-float { animation: floatY 4s ease-in-out infinite; }
        .glass { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
      `}</style>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left big visual - sliding testimonial carousel */}
        <div className="relative rounded-3xl overflow-hidden h-[640px] lg:h-[820px] bg-gradient-to-br from-[#ff6b6b] via-[#000000] to-[#ff3d7f] p-6 shadow-2xl">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.03), transparent)'}} />

          <div className="relative h-full w-full flex items-center">
            <style>{`
              .marquee { overflow: hidden; }
              .marquee-track { display: flex; gap: 24px; align-items: center; }
              .marquee-track .card { flex: 0 0 70%; max-width: 720px; }
              .marquee-track .card .card-inner { transition: transform 260ms ease; }
              .marquee-track .card:hover .card-inner { transform: translateY(-8px) scale(1.02); }
              @keyframes marqueeScroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .marquee-track.scrolling { animation: marqueeScroll linear infinite; animation-duration: ${Math.max(14, testimonials.length * 6)}s; }
              .marquee:hover .marquee-track.scrolling { animation-play-state: paused; }
            `}</style>

            <div className="w-full h-full marquee">
              <div className="marquee-track scrolling" style={{ width: `${testimonials.length * 200}%` }}>
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <div key={idx} className="card flex-shrink-0 p-8">
                    <div className="card-inner glass bg-white/8 rounded-2xl p-8 shadow-xl border border-white/6">
                      <div className="text-6xl mb-4 text-white/95">“</div>
                      <p className="text-white text-lg lg:text-xl leading-relaxed font-medium">{t.quote}</p>

                      <div className="flex items-center gap-4 mt-6">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/20" />
                        <div>
                          <div className="font-semibold">{t.name}</div>
                          <div className="text-sm text-white/70">{t.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right contact form */}
        <div className="bg-[#0f0f0f] rounded-2xl p-10 shadow-lg border border-white/6">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm text-white/70 mb-8">Please reach out to us and we will get back to you at the speed of light.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Full Name</label>
              <input className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 outline-none" placeholder="Your name" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Email address</label>
              <input type="email" className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 outline-none" placeholder="hello@you.com" value={form.email} onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))} />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Company</label>
              <input className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 outline-none" placeholder="Company name" value={form.company} onChange={(e) => setForm(prev => ({ ...prev, company: e.target.value }))} />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea rows={6} className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 outline-none" placeholder="Enter your message here" value={form.message} onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))} />
            </div>

            <div className="mt-4">
              <button type="submit" disabled={sending} className="w-full py-4 bg-white text-black rounded-full font-medium shadow-md">{sending ? 'Sending...' : 'Submit'}</button>
            </div>
            {status && (
              <div className={`text-sm mt-2 ${status.ok ? 'text-green-400' : 'text-rose-400'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
