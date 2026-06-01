// import { useGSAP } from '@gsap/react'
// import ProjectCard from '../comonents/projects/ProjectCard.jsx'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'


// const Projects = () => {

//   const projects = [{
//     image1: 'public/project/appleDashboard.png',
//     image2: 'public/project/doctor.png'
//   }, {
//     image1: 'public/project/hmschool.png',
//     image2: 'public/project/hiFoodie.png'
//   }, {
//     image1: 'public/project/ecommerce.png',
//     image2: 'public/project/projectManagement.png'
//   },{
//     image1: 'public/project/todoProject.png',
//     image2: 'public/project/onePagePortfolio.png'
//   }, {
//     image1: 'public/project/feedback.png',
//     image2: 'public/project/moneyMap.png'
//   }]


//   gsap.registerPlugin(ScrollTrigger)

//   useGSAP(function () {
//     gsap.from('.hero', {
//       height: '100px',
//       stagger: {
//         amount: 0.4
//       },
//       scrollTrigger: {
//         trigger: '.lol',
//         start: 'top 100%',
//         end: 'top -150%',
//         scrub: true
//       }
//     })
//   })

//   return (
//   <>
//     <div className='lg:p-4 p-2 mb-[100vh]'>
//       <div className=' pt-[45vh]'>
//         <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
//       </div>
//       <div className='-lg:mt-20 lol'>
//         {projects.map(function (elem, idx) {
//           return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
//             <ProjectCard image1={elem.image1} image2={elem.image2} />
//           </div>
//         })}

//       </div>
//     </div>
//   </>
//   )
// }

// export default Projects

import { useGSAP } from "@gsap/react";
import ProjectCard from "../comonents/projects/ProjectCard.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projects = [
    {
      title: "HM School",
      summary:
        "School management platform for students, teachers and attendance.",
      github: "https://github.com/yourusername/hm-school",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257172/hmschool_fd749b.png",
    },

    {
      title: "Apple Ads Dashboard",
      summary:
        "Modern analytics dashboard built using React, Tailwind and charts.",
      github: "https://github.com/yourusername/apple-dashboard",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257089/appleDashboard_hqcwcn.png",
    },

     {
      title: "Real Time Tracking",
      summary:
        "Real-time tracking dashboard with live data updates and interactive maps.",
      github: "#",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780342403/Screenshot_2026-06-02_010159_yfext1.png",
    },

    {
      title: "NFT Minter",
      summary:
        "NFT minter dApp allowing users to create and manage their own NFTs on the blockchain.",
      github: "#",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780343859/Screenshot_2026-06-02_012552_dhc6qv.png",
    },

    {
      title: "Car Price Predictor",
      summary:
        "Machine learning app that predicts used car prices based on features.",
      github: "",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780343240/Screenshot_2026-06-02_011637_vau2mh.png",
    },

    {
      title: "Doctor Appointment",
      summary:
        "Doctor booking platform with authentication and appointment system.",
      github: "https://github.com/yourusername/doctor-app",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257091/doctor_o4cfim.png",
    },


    {
      title: "HiFoodie",
      summary:
        "Food delivery frontend with responsive UI and smooth animations.",
      github: "https://github.com/yourusername/hifoodie",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257171/hiFoodie_j6gs1s.png",
    },

    {
      title: "E-Commerce",
      summary:
        "Full MERN e-commerce platform with cart and payment integration.",
      github: "https://github.com/yourusername/ecommerce",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257095/ecommerce_msxtso.png",
    },

    {
      title: "Project Management",
      summary:
        "Task and team collaboration dashboard inspired by Jira and Notion.",
      github: "https://github.com/yourusername/project-management",
      image: "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780257185/projectManagement_murgwf.png",
    },
  ];

  useGSAP(() => {
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".projects-wrapper",
        start: "top 80%",
      },
    });
  });

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <div className="pt-[20vh] mb-16">
        <h2 className="font-[font2] lg:text-[8vw] text-6xl uppercase">
          Projects
        </h2>
      </div>

      <div className="projects-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;