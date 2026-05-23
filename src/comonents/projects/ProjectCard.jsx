// import React from 'react'

// const ProjectCard = (props) => {
//     return (
//         <>
//             <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
//                 <img className='h-full w-full object-cover' src={props.image1} alt="" />
//                 <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
//                     <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le projet</h2>
//                 </div>
//             </div>
//             <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
//                 <img className='h-full w-full object-cover' src={props.image2} alt="" />
//                 <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
//                     <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le projet</h2>
//                     <p className='text-white text-2xl mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProjectCard

// import React from "react";
// import { FaGithub } from "react-icons/fa";

// const ProjectCard = ({ project }) => {
//   return (
//     <a
//       href={project.github}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="project-card group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 hover:border-[#D3FD50] transition-all duration-500"
//     >
//       {/* Image */}
//       <div className="overflow-hidden h-[300px]">
//         <img
//           className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
//           src={project.image}
//           alt={project.title}
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//         <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white text-white backdrop-blur-md">
//           <FaGithub className="text-2xl" />
//           <span className="uppercase tracking-wider">
//             View Project
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-3 group-hover:text-[#D3FD50] transition">
//           {project.title}
//         </h2>

//         <p className="text-neutral-400 leading-relaxed text-sm">
//           {project.summary}
//         </p>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;

import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group relative overflow-hidden rounded-[30px] hover:rounded-[80px] h-[400px]"
    >
      <div className="overflow-hidden h-full w-full">
        <img
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="opacity-0 transition-all duration-500 group-hover:opacity-100 absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
        <div className="flex items-center gap-3 border-2 border-white rounded-full px-8 py-4">
          <FaGithub className="text-3xl text-white" />
          <h2 className="uppercase text-4xl font-[font1] text-white">View Details</h2>
        </div>

        <h3 className="text-3xl mt-8 font-bold text-[#D3FD50]">{project.title}</h3>

        <p className="text-yellow-50 mt-4 text-lg max-w-lg leading-relaxed">{project.summary}</p>
      </div>
    </a>
  );
};

export default ProjectCard;