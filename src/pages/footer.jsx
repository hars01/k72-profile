import { useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SmartFooter() {

  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <img src="/mnt/data/myLogo2.png" className="w-20 mx-auto mb-4" />

        <p className="text-gray-400 mb-6">
          Ladies and Gentlemen, thanks for visiting.  
          If you want to connect with me, check my social links below.  
          For feedback, email at <span className="text-yellow-400">hiharshtech@gmail.com</span>  
          or fill the <a href="/connect" className="text-blue-400 underline">connect form</a>.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:scale-125 transition">🌐</a>
          <a href="#" className="hover:scale-125 transition">💼</a>
          <a href="#" className="hover:scale-125 transition">🐙</a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Harsh Mishra
        </p>
      </div>
    </footer>
  );
}