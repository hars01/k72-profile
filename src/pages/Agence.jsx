import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'


const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090494/my13_r7h1tm.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090421/my5_qsmypg.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090485/my14_dafpf3.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780261636/1751875140943_fiv2ep.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780261271/1771881190830_qxn5r8.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780260308/IMG_20241115_134343346_HDR_g7mkld.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780260427/IMG_20251109_175100009_HDR_bzsjvk.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090428/my11_ombc1q.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780260616/IMG_20260220_134608704_HDR_v8zlxq.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780260806/IMG_20260220_160218609_HDR_hznuy6.jpg",
    "https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090406/my4_vxcqyv.jpg"
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
        <div ref={imageDivRef} className=' absolute overflow-hidden h-[30vw] rounded-2xl w-[23vw] top-60  left-[25vw] '>
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
