import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Line animation
      gsap.from(".timeline-line", {
        height: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Line */}
      <div className="timeline-line absolute left-2 top-0 w-[2px] bg-gradient-to-b from-[#D3FD50] to-pink-500 h-full"></div>

      {data.map((item, idx) => (
        <div key={idx} className="timeline-item relative pl-10 mb-16">
          {/* Dot */}
          <div className="absolute left-0 top-2 w-4 h-4 bg-[#D3FD50] rounded-full border border-black"></div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3">{item.title}</h3>

          {/* Content */}
          <div className="bg-neutral-900 p-5 rounded-xl shadow-lg hover:scale-[1.02] transition">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};