import { useState } from "react";
import { Mail } from "lucide-react";
import { FaFacebookF, FaYoutube, FaWhatsapp} from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function SmartFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="text-white p-1">
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-rose-900 rounded-tl-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: logo + description */}
            <div className="md:col-span-4">
              <img src="https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090459/myLogo2_snzvjh.png" className="w-28 md:w-32 mb-6" alt="logo" />
              <p className="text-gray-300 leading-relaxed">
                          Ladies and Gentlemen, thanks for visiting.  
          If you want to connect with me, check my social links below.  
          For feedback, email at <span className="text-yellow-400">hiharshtech@gmail.com </span>  
           or fill the <a href="/connect" className="text-blue-400 underline">connect</a> form.

              </p>
            </div>

            {/* Middle: Office & Links */}
            <div className="md:col-span-5 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h4 className="font-semibold mb-3">Office</h4>
                <div className="h-1 w-14 bg-gray-300 rounded mb-4 opacity-60"></div>
                <address className="not-italic text-gray-200 text-sm">
                  C-172 Pandav Nagar<br />
                  Akshradham, New Delhi<br />
                  PIN 110092, India
                </address>
                <a href="mailto:hiharsh.001@gmail.com" className="block mt-4 underline text-gray-100">hiharshtech@gmail.com</a>
                <div className="mt-3 font-semibold">+91 - 9455589794</div>
              </div>

              <div className="md:w-1/2">
                <h4 className="font-semibold mb-3">Links</h4>
                <div className="h-1 w-14 bg-gray-300 rounded mb-4 opacity-60"></div>
                <ul className="text-gray-200 space-y-3 text-sm">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/projects" className="hover:underline">Services</a></li>
                  <li><a href="/agence" className="hover:underline">About Me</a></li>
                  {/* <li><a href="/features" className="hover:underline">Features</a></li> */}
                  <li><a href="/connect" className="hover:underline">Contacts</a></li>
                </ul>
              </div>
            </div>

            {/* Right: Newsletter + social */}
            <div className="md:col-span-3">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="h-1 w-14 bg-gray-300 rounded mb-4 opacity-60"></div>

              <form onSubmit={(e)=>{e.preventDefault(); /* you can wire submit */ }} className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="sr-only">Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></span>
                    <input
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="Enter your email id"
                      className="pl-10 pr-3 py-2 w-full bg-transparent border-b border-gray-300 placeholder-gray-300 text-sm outline-none"
                      aria-label="email"
                    />
                  </div>
                </div>
                <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
                  ➜
                </button>
              </form>

              <div className="mt-6 flex gap-4">
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900" href="https://leetcode.com/u/harsh_111/"><h1 className="text-xl">L</h1></a>
                {/* <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900" href="#"><FaYoutube /></a> */}
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900" href="https://www.linkedin.com/in/harsh-mishra-418057256/?skipRedirect=true"><FaLinkedin /></a>
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900" href="https://chat.whatsapp.com/JucRYQcgxbELRVOnC7gXRM"><FaWhatsapp /></a>
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900" href="https://github.com/hars01"><FaGithub /></a>
              </div>
            </div>
          </div>
          {/* <hr className="border-gray-400/20 my-8" /> */}
        </div>
      </div>
      <div className="text-center p-1 h-8 bg-gradient-to-r via-black-900 to-red-900 text-amber-50 text-sm">
            Harsh Mishra © {new Date().getFullYear()} - All Rights Reserved
      </div>
    </footer>
  );
}