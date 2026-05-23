import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext' 
import { Link } from 'react-router-dom'

// const FullScreenNav = () => {
//   return (
//     <div>FullScreenNav</div>
//   )
// }

// export default FullScreenNav = () => {


const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-y-auto h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between p-1 items-start">
                    <div className=''>
                        <div className='lg:w-36 w-24'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 h-10 w-20 lg:w-32 relative cursor-pointer mb-5'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                    </div>
                </div>
                <div id='fullScreennav' className='p-0'>
                    <Link to="/skills" onClick={() => { setNavOpen(false) }} id='all-links' className='block link origin-top relative border-t-2 border-white'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Skills</h1>
                        <div id='links' className='moveLink absolute text-black flex top-0 bg-[#D3FD50] left-0 w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center w-max'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>C++ Java Python</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://tse3.mm.bing.net/th/id/OIP.nOVnQbrod2zrHTTc4yBfEAHaDt?pid=Api&P=0&h=180" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>ReactJs NodeJs ExpressJs</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://www.innovationnewsnetwork.com/wp-content/uploads/2022/09/%C2%A9-iStockTraitov.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Javascript HTML CSS</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://uploads.sarvgyan.com/2014/06/cse-image.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>SQL MongoDB NextJs</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://www.placementpreparation.io/blog/cdn-cgi/image/metadata=keep,quality=60/wp-content/uploads/2024/05/python-vs-cpp.webp" alt="" />
                            </div>
                        </div>
                    </Link>

                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Projects</h1>
                          <div id='links' className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>HM School</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/project/hmschool.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Apple Ads</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/project/appleDashboard.png" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Doctor Room</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/project/doctor.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>hiFoodie</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/project/hiFoodie.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <Link to="/interesting-cards" onClick={() => { setNavOpen(false) }} className='link origin-top relative border-t-1 border-white block'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Cards</h1>
                          <div id='links' className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Intresting</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/card/myCardOne.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Visiting</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/card/myCardTwo.png" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Introductary</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/card/myCardOne.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Passionate</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="/card/myCardTwo.png" alt="" />
                            </div>
                        </div>
                    </Link>

                    <Link to="/content" onClick={() => { setNavOpen(false) }} className='link origin-top relative border-t-1 border-white block'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Content</h1>
                         <div id='links' className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>

                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Upcoming</h1>
                         <div id='links' className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Wait</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>More</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'> & </h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>More</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <Link to="/connect" onClick={() => { setNavOpen(false); window.scrollTo(0,0); }} className='link origin-top relative border-y-1 border-white block'>
                        <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Connect Here</h1>
                         <div id='links' className='moveLink absolute text-black flex top-0 bg-[#D3FD50] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Connect</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://img.magnific.com/premium-vector/illustration-connecting-people-communication-concept-social-network_302149-38.jpg?w=1800" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Contact</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'> & </h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Relate</h2>
                                <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav

// // src/comonents/Navigation/FullScreenNav.jsx
// import gsap from 'gsap';
// import React, { useContext, useEffect, useRef } from 'react';
// import { NavbarContext } from '../../context/NavContext';

// const toArray = (nodeList) => (nodeList ? Array.from(nodeList) : []);

// const FullScreenNav = () => {
//   const fullNavLinksRef = useRef(null);
//   const fullScreenRef = useRef(null);
//   const [navOpen, setNavOpen] = useContext(NavbarContext);

//   useEffect(() => {
//     // If ref not attached yet, skip
//     if (!fullScreenRef.current) return;

//     // Create the gsap context and scope animations to the ref
//     const ctx = gsap.context(() => {
//       const container = fullScreenRef.current;

//       // Select elements scoped inside the container
//       const stairing = toArray(container.querySelectorAll('.stairing'));
//       const linkEls = toArray(container.querySelectorAll('.link'));
//       const navlinkEls = toArray(container.querySelectorAll('.navlink'));

//       // Set safe initial states only for non-empty collections
//       if (container) {
//         gsap.set(container, { autoAlpha: 0, display: 'none' });
//       }
//       if (stairing.length) gsap.set(stairing, { height: 0 });
//       if (linkEls.length) gsap.set(linkEls, { opacity: 0, rotateX: 90 });
//       if (navlinkEls.length) gsap.set(navlinkEls, { opacity: 0 });

//       // Build open timeline (only targets non-empty arrays)
//       const tlOpen = gsap.timeline({ paused: true });
//       if (container) tlOpen.set(container, { display: 'block', autoAlpha: 1 });
//       if (stairing.length)
//         tlOpen.to(stairing, { height: '100%', duration: 0.8, stagger: { amount: 0.4 } }, 0.05);
//       if (linkEls.length)
//         tlOpen.to(linkEls, { opacity: 1, rotateX: 0, duration: 0.6, stagger: { amount: 0.3 } }, 0.15);
//       if (navlinkEls.length) tlOpen.to(navlinkEls, { opacity: 1, duration: 0.4 }, 0.4);

//       // Build close timeline
//       const tlClose = gsap.timeline({ paused: true });
//       if (linkEls.length)
//         tlClose.to(linkEls, { opacity: 0, rotateX: 90, duration: 0.35, stagger: { amount: 0.12 } }, 0);
//       if (stairing.length)
//         tlClose.to(stairing, { height: 0, duration: 0.5, stagger: { amount: 0.2 } }, 0.1);
//       if (navlinkEls.length) tlClose.to(navlinkEls, { opacity: 0, duration: 0.2 }, 0.15);
//       if (container) tlClose.set(container, { autoAlpha: 0, display: 'none' }, '>-0.05');

//       // Play the correct timeline
//       if (navOpen) {
//         tlClose.pause(0);
//         tlOpen.restart();
//       } else {
//         tlOpen.pause(0);
//         tlClose.restart();
//       }

//       // Optionally store timelines on the context for debugging:
//       // (not required) ctx.tlOpen = tlOpen; ctx.tlClose = tlClose;
//     }, fullScreenRef);

//     // Cleanup on unmount or when navOpen changes
//     return () => ctx.revert();
//   }, [navOpen]);

//   return (
//     <div
//       ref={fullScreenRef}
//       id="fullscreennav"
//       className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
//     >
//       <div className="h-screen w-full fixed">
//         <div className="h-full w-full flex">
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//         </div>
//       </div>

//       <div ref={fullNavLinksRef} className="relative">
//         <div className="navlink flex w-full justify-between p-1 items-start">
//           <div>
//             <div className="lg:w-36 w-24">
//               {/* svg */}
//             </div>
//           </div>

//           <div
//             onClick={() => setNavOpen(false)}
//             className="lg:h-32 h-10 w-20 lg:w-32 relative cursor-pointer"
//           >
//             <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
//             <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
//           </div>
//         </div>

//         <div id="fullScreennav" className="p-5">
//           {/* IMPORTANT: ensure the wrappers for each section use className="link" where expected */}
//           <div id="all-links" className="link origin-top relative border-t-1 border-white">
//             <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
//               Projets
//             </h1>
//             {/* ... rest of your markup (keep .link and .navlink classes as appropriate) */}
//           </div>

//           {/* ... Agence / Contact / Blogs sections ... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullScreenNav;




