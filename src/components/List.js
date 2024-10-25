import React, { useRef } from 'react'
import Listitem from './Listitem'

const List = ({name,movieList}) => {
  
  const scrollContainer = useRef(null)
  const scrollAmount=166;
  let flag=true;
  function scroll(sign){
   if(flag){
    flag=false;
    // const container = scrollContainer.current;
      
      // // Calculate the remaining scrollable width
      // const maxScrollLeft = container.scrollWidth - container.clientWidth;
      // const currentScrollLeft = container.scrollLeft;

      // let newScrollAmount = sign * scrollAmount;

      // // Prevent scrolling beyond boundaries
      // if (sign === -1 && currentScrollLeft <= 0) {
      //   newScrollAmount = 0; // Prevent further left scroll
      // } else if (sign === 1 && currentScrollLeft >= maxScrollLeft) {
      //   newScrollAmount = 0; // Prevent further right scroll
      // }
   scrollContainer.current.scrollBy({

    left: sign*scrollAmount, // Negative to scroll to the left
    behavior: "smooth",
   
  });
  setTimeout(()=>{flag=true},300)   
}
  
  }
  const handlescrollleft= ()=>{
    scroll(-1)
  }
  const handlescrollright= ()=>{
    scroll(+1)
  }
  return (
    <div>
    <h1 className='text-xl text-white font-bold mb-2'>{name}</h1>
    <div className='relative'>
     <button className='absolute left-0 z-10 top-1/2 -translate-y-1/2 text-white text-8xl h-full pb-5 leading-[18px]' onClick={handlescrollleft}>&#8249;</button>
     <div className='grid grid-flow-col gap-4 auto-cols-[150px] overflow-x-hidden overflow-y-hidden ' ref={scrollContainer}>
     {movieList.map((data)=><Listitem key ={data.id} posterPath = {data.poster_path}/>)}
     </div>
    <button className='absolute  right-0 top-1/2 -translate-y-1/2  h-full text-white text-8xl pb-5  leading-[18px]'  onClick={handlescrollright}>&#8250;</button>
    </div>
    
    </div>
  )
}

export default List