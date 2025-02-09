import React, {  useRef } from 'react'
import Listitem from './Listitem'
import {ShimmerForHomeCard }from './Shimmer'

const List = ({name,movieList}) => {
  // const widthcontainer=useRef(0)
  
  const scrollContainer = useRef(null)
   const arr = Array(20).fill(0)
  // const scrollAmount=166;
//   let flag=true;
//   function scroll(sign){
//    if(flag){
//     flag=false;
//     // const container = scrollContainer.current;
      
//       // // Calculate the remaining scrollable width
//       // const maxScrollLeft = container.scrollWidth - container.clientWidth;
//       // const currentScrollLeft = container.scrollLeft;

//       // let newScrollAmount = sign * scrollAmount;

//       // // Prevent scrolling beyond boundaries
//       // if (sign === -1 && currentScrollLeft <= 0) {
//       //   newScrollAmount = 0; // Prevent further left scroll
//       // } else if (sign === 1 && currentScrollLeft >= maxScrollLeft) {
//       //   newScrollAmount = 0; // Prevent further right scroll
//       // }
//    scrollContainer.current.scrollBy({

//     left: sign*scrollAmount, // Negative to scroll to the left
//     behavior: "smooth",
   
//   });
//   setTimeout(()=>{flag=true},300)   
// }
  
//   }
 
const handleScroll=(e)=>{
    const {columnGap} =getComputedStyle(scrollContainer.current)
    
    scrollContainer.current.scrollBy({left:(e.target.textContent==="\u203A"?"":"-")+(Number(columnGap.slice(0,-2))+Number(scrollContainer.current.firstChild.clientWidth)),behavior:"smooth"})
    
  }
 
  return (
    <div className=''>
    <h1 className={`md:text-lg ${name==="Now Playing"?"mt-4":""} text-white font-bold mb-3 sm:mb-2 text-md lg:text-xl `}>{name}</h1>
    <div className='relative  '>
     <button className='absolute left-0 z-10 top-1/2 -translate-y-1/2 text-white text-8xl h-full pb-5 leading-[18px]' onClick={handleScroll}>&#8249;</button>
     <div  className={` grid grid-flow-col gap-x-2  p-0 sm:gap-2 lg:gap-4 auto-cols-[calc((100%-16px)/3)] sm:auto-cols-[calc((100%-24px)/4)] md:auto-cols-[calc((100%-40px)/6)] lg:auto-cols-[calc((100%-112px)/8)] w-full  sm:min-h-28  min-h-16  overflow-x-scroll scrollbar-none snap-x `} ref={scrollContainer}>
     {!movieList?.length?arr.map((_,index)=><ShimmerForHomeCard key={index}/>):movieList.map((data)=><Listitem key ={data.id} posterPath = {data.poster_path}/>)}
     
     </div>
     
    <button className='absolute  right-0 top-1/2 -translate-y-1/2  h-full text-white text-8xl pb-5  leading-[18px]'  onClick={handleScroll}>&#8250;</button>
    </div>
    
    </div>
  )
} 

export default List