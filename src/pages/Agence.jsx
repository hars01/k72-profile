import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'


const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    "my3.jpg",
    "my4.jpg",
    "my5.jpg",
    "my6.jpg",
    "my7.jpg",
    "my8.jpg",
    "my9.jpg",
    "my10.jpg",
    "my11.jpg",
    "my13.jpg",
    "my14.jpg",

  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        start:"top 36%",
        end:"top -80%",
        // scrub:true,
        pin: true,
        onUpdate:(elem)=>{
          // console.log(Math.floor(elem.progress * imagesArray.length));
          let imeageIndex;
          if(elem.progress<1) {
            imeageIndex = Math.floor(elem.progress * imagesArray.length);
          }else{
            imageIndex = imagesArray.length - 1;
          }
          imageRef.current.src = imagesArray[imeageIndex];
        }
      },
    })
  })

return (
    // <div className='parent relative'>
    <div className='parent relative min-h-[250vh] overflow-hidden'>
      <div className='relative py-1'>
        <div ref={imageDivRef} className=' absolute overflow-hidden h-[27vw] rounded-2xl w-[20vw] top-60  left-[25vw] '>
          <img  ref={imageRef} className='h-full object-cover w-full' src="my.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Mishra <br />
              Harsh</h1>
          </div>

          <div className='pl-[40%] mt-20 p-3 text-emerald-50'>
            <p className='text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am Harsh Mishra, a passionate Full Stack Developer and Computer Science student who loves building immersive digital experiences with modern web technologies. I specialize in the MERN stack and enjoy transforming ideas into responsive, high-performance applications with clean UI/UX and smooth animations.</p>
            <p className='mt-10 text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I believe great products are not just functional — they should feel alive, intuitive, and memorable. My journey in tech is driven by curiosity, consistency, and the desire to create impactful solutions while continuously learning and evolving as a developer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
