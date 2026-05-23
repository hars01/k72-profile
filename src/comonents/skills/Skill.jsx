import React from "react";
import { Timeline } from "../ui/timeline.jsx";

const Skill = () => {
  const data = [
     {
      title: "Start",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            Started journey in programming and problem solving.
          </p>
           <div className="grid grid-cols-2 gap-4">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.nOVnQbrod2zrHTTc4yBfEAHaDt?pid=Api&P=0&h=180"
              className="h-50 w-full object-cover rounded-lg"
            />
            
          </div>
          <ul className="mt-6 space-y-2 text-sm text-neutral-400">
            <li>✅ Programming Fundamentals, Mathematics, Physics, Chemistry</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p className="mb-6 text-sm text-neutral-300">
            Focused on learning core web development and building mini projects.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://www.innovationnewsnetwork.com/wp-content/uploads/2022/09/%C2%A9-iStockTraitov.jpg"
              className="h-50 w-full object-cover rounded-lg"
            />
            
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-400">
            <li>✅ HTML, CSS</li>
            <li>✅ Basic C</li>
            <li>✅ Programming Fundamentals, Mathematics</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="mb-6 text-sm text-neutral-300">
            Exploring the **Fundamentals of the Web**. This year was dedicated to understanding the building blocks 
            of the internet and developing a strong mathematical and logical approach to programming in C.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://kinsta.com/wp-content/uploads/2020/08/responsive-adaptive-design.png"
              className="h-50 w-full object-cover rounded-lg"
            />
            <img
              src="https://www.placementpreparation.io/blog/cdn-cgi/image/metadata=keep,quality=60/wp-content/uploads/2024/05/python-vs-cpp.webp"
              className="h-50 w-full object-cover rounded-lg"
            />
            <img
              src="https://uploads.sarvgyan.com/2014/06/cse-image.jpg"
              className="h-50 w-full object-cover rounded-lg"
            />
           
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-400">
            <li>✅ HTML, CSS, Javascript, Web Designing, Basic of GitHub</li>
            <li>✅ Basics of C++, Java & Python Programming Languages</li>
            <li>✅ Linear Data Structures and Algorithms, their Basics, Mathematics, Object-Oriented Programming with Java</li>
            <li>✅ Computer Organization & Architecture, Discrete Structures & Theory of Logic, Operating Systems, Introduction of Cyber Security</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2024 - 2025",
      content: (
        <div>
          <p className="mb-6 text-sm text-neutral-300">
           Transitioning into **Full-stack Engineering**. Deep diving into database management, 
           algorithm analysis, and the intricacies of Blockchain architecture while building responsive, API-driven web applications.
          </p>

          <div className="grid grid-cols-1 gap-4">
           
            <img
              src="https://img.magnific.com/premium-photo/modern-corporate-office-meeting-room-multidisciplinary-group-businesspeople-lawyers-executives-board-members-discussing-negotiating-working-winning-strategy_76964-269024.jpg"
              className="h-50 w-full object-cover rounded-lg"
            />
            
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-400">
            <li>✅ DBMS, SQL & MongoDB integration</li>
            <li>✅ Advanced DSA with C++, Design and Analysis of Algorithm</li>
            <li>✅ React + Tailwind UI systems, req/res from APIs, Node.js, Express.js, Git, GitHub</li>
            <li>✅ Realworld Full-stack projects, Software Engineering, Machine Learning, Blockchain Architecture Design, Introduction of System Design, Compiler Design, Computer Networks</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025 - 2026",
      content: (
        <div>
          <p className="mb-6 text-sm text-neutral-300">
           Bridging the gap between **Full-stack Development and Artificial Intelligence**. 
           Mastering data-driven decision making, containerization with Docker, and deploying scalable applications across diverse cloud platforms.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.DqIUDu2YxS5_9khTZDUAmgHaFj?pid=Api&P=0&h=180"
              className="h-50 w-full object-cover rounded-lg"
            />
           
            <div className="grid grid-cols-4 gap-4">
            <img
              src="https://c8.alamy.com/comp/2YKPJ6T/complex-problem-solving-concept-illustration-of-a-person-weighing-options-with-arrows-and-a-light-bulb-idea-critical-thinking-and-decision-making-process-vector-illustration-2YKPJ6T.jpg"
              className="h-50 w-full object-fill rounded-lg"
            />
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.KrHDk6U2Rvra_2V5Ck7VrwHaEu?pid=Api&P=0&h=180"
              className="h-50 w-full object-cover rounded-lg"
            />
            <img
              src="https://thumbs.dreamstime.com/b/machine-learning-data-flow-diagrams-332104731.jpg?w=576"
              className="h-50 w-full object-cover rounded-lg"
            />
            <img
              src="https://assets.techrepublic.com/uploads/2022/10/cloud-computing-virtualization.jpeg"
              className="h-50 w-full object-cover rounded-lg"
            />
          </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-400">
            <li>✅ Advanced DSA with C++, Competetive Coding Plateform, Companies Problem Solving, Git, GitHub, GitLab, Google Cloud Services, Cloudinary</li>
            <li>✅ MERN Stack Development, AI Integration, Authentication (JWT Tokens/Cookies), Authorization, Backend with Javascript (Node.js), Next.js, Full-stack projects, Deployment (Vercel, Netlify), Testing, Docker, Figma Design</li>
            <li>✅ Machine Learning Algorithems, Artificial Intelligence Basics, Advanced Python Coding, Numpy, Pandas, Data Training/Testing, ML Projects</li>
            <li>✅ Advance OOPs, System Design, Cloud Computing, PROJECT MANAGEMENT, Introduction of DWDM, Devops</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Future",
      content: (
        <div>
          <p className="mb-6 text-sm text-neutral-300">
            Scaling expertise towards **Software Architecture** and **Cloud Infrastructure**. 
            Focusing on building high-performance distributed systems, advanced DevOps automation, and integrating AI to solve complex enterprise-level challenges.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://storage.ghost.io/c/6a/10/6a109410-b171-44e6-9589-5168e761531a/content/images/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp"
              className="h-50 w-full object-cover rounded-lg"
            />
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.YAQYieqzEJuvCoZPq5gcfwHaHa?pid=Api&P=0&h=180"
              className="h-50 w-full object-fill rounded-lg"
            />
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.NVmlERlSybwYoWqqKhom9AHaDn?pid=Api&P=0&h=180"
              className="h-50 w-full object-fill rounded-lg"
            />
           
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-400">
            <li>✅ Advanced Data Structure Problems, Complex SQL Query</li>
            <li>✅ MERN Stack Development, Next.js, React Native (Mobile Application Development), AI Interation with Benifits</li>
            <li>✅ Postman, LambdaTest, Unit Test, Automation (Ranorex, TestComplete, Testim, Cucumber) , AWS (S3) CodeDeploy, Azure Services, GitHub Actions, Google Cloud Deployment Manager</li>
            <li>✅ Realworld Application, Product Designing, User Experience Design, System Designing (HLD/LLD), Try Spring/Spring Boot, Java Backend, Software Industry Technology</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl lg:text-6xl text-center mb-12 font-bold">
        My Journey 🚀
      </h1>

      <div className="max-w-5xl mx-auto">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Skill;