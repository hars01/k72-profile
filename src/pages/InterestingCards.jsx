// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function InterestingCards() {
//   return (
//     <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
//       <div className="max-w-4xl w-full">
//         <div className="mb-8">
//           <h1 className="text-4xl lg:text-5xl font-bold">Interesting Cards</h1>
//           <p className="text-neutral-400 mt-2">A demo of a floating/tilt card effect using CSS perspective.</p>
//         </div>

//         <div
//           className="group mx-auto w-full sm:w-[40rem]"
//           style={{ perspective: 1200 }}>

//           <div className="relative">
//             <div
//               className="rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-black/50"
//               style={{ transformStyle: 'preserve-3d' }}>

//               <div className="p-6">
//                 <div className="transform-gpu will-change-transform">
//                   <h2 className="text-2xl font-extrabold">Make things float in air</h2>
//                   <p className="text-neutral-400 mt-2">Hover over this card to unleash the power of CSS perspective</p>
//                 </div>

//                 <div className="mt-6 w-full">
//                   <div
//                     className="rounded-xl overflow-hidden transition-transform duration-500 ease-out group-hover:rotate-3"
//                     style={{ transform: 'rotate(-8deg) translateZ(0)', transformOrigin: 'center' }}>
//                     <img
//                       src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
//                       alt="thumbnail"
//                       className="w-full h-56 object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between mt-8">
//                   <Link to="/" className="text-sm text-neutral-300">Try now →</Link>
//                   <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold">Sign up</button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../comonents/ui/3d-card";
import { Link } from "react-router-dom";

export default function InterestingCards() {
  
  const downloadImage = async (src, filename) => {
    try {
      const res = await fetch(src, { mode: 'cors' });
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename || src.split('/').pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
      // revoke after a short delay to ensure the download starts
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      console.error('Download failed', err);
      // fallback: open image in new tab so user can save manually
      window.open(src, '_blank');
    }
  };
  return (
    <>
    <div className=" bg-black text-white flex justify-center mt-9">
      <h1 className="text-4xl lg:text-5xl font-bold">Interesting Cards</h1>
   </div>
    <main className="min-h-screen bg-black text-yellow-50 flex items-center justify-center p-2">
      
      <CardContainer className="inter-var">
        <CardBody className="bg-green-950 border border-white/10 rounded-xl p-6 w-[22rem] sm:w-[30rem]">

          <CardItem translateZ={50} className="text-2xl font-bold">
            Virtual Visiting Card - Front Look
          </CardItem>

          <CardItem
            translateZ={60}
            className="text-neutral-400 text-sm mt-2"
          >
            Use it for future networking just for acknoledgement purpose.
          </CardItem>

          <CardItem translateZ={100} className="w-full mt-6">
            <img
              src="https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257285/myCardOne_qiso76.png"
              className="h-60 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-8">
            <CardItem as={Link} to="/" translateZ={20} className="text-sm text-neutral-300">Try now →</CardItem>

            <CardItem translateZ={20} className="">
              <button
                type="button"
                onClick={() => downloadImage('/card/myCardOne.png', 'myCardOne.png')}
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              >
                Download
              </button>
            </CardItem>
          </div>

        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var p-8">
        <CardBody className="bg-green-950 border border-white/10 rounded-xl p-6 w-[22rem] sm:w-[30rem]">

          <CardItem translateZ={50} className="text-2xl font-bold">
           Virtual Visting Card - Back Look
          </CardItem>

          <CardItem
            translateZ={60}
            className="text-neutral-400 text-sm mt-2"
          >
             It has all my details and links to my socials and portfolio.
          </CardItem>

          <CardItem translateZ={100} className="w-full mt-6">
            <img
              src="https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257287/myCardTwo_xtcvdk.png"
              className="h-60 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-8">
            <CardItem as={Link} to="/" translateZ={20} className="text-sm text-neutral-300">Try now →</CardItem>

            <CardItem translateZ={20} className="">
              <button
                type="button"
                onClick={() => downloadImage('/card/myCardTwo.png', 'myCardTwo.png')}
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              >
                Download
              </button>
            </CardItem>
          </div>

        </CardBody>
      </CardContainer>
      
    </main>
    
    </>
  );
}