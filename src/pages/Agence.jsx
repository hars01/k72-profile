import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'


const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    "my.jpg",
    "my2.jpg",
    "my3.jpg",
    "my4.jpg",
    "my5.jpg",
    "my6.jpg",
    "my7.jpg",
    "my8.jpg",
    "my9.jpg",
    "my10.jpg",
    "my11.jpg",
    "my12.jpg",
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
    <div className='parent'>
      <div className='relative py-1'>
        <div ref={imageDivRef} className=' absolute overflow-hidden h-[27vw] rounded-2xl w-[20vw] top-60  left-[25vw] '>
          <img  ref={imageRef} className='h-full object-cover w-full' src="my.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>

          <div className='pl-[40%] mt-20  p-3'>
            <p className='text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
