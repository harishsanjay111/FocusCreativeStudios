import React from 'react'
import AnimateOnScroll from "../../Animation/AnimationOnScroll"
const Do = () => {
  return (
    <div>
    <AnimateOnScroll delay={0.1}>
    <div className='pb-[2rem] max-[768px]:pt-[3rem]'>
    <div className='mx-[auto] text-center  text-[2rem] font-extrabold text-[#17210d] max-[768px]:text-[1.7rem]'>
         We Do
         
         </div>
         <div className='bg-black w-[38px] h-[3px] mx-[auto]'></div>
         </div>
         </AnimateOnScroll>
         </div>
  )
}

export default Do