import React from 'react'

// const Shimmer = () => {
    
//   return (
//     <div className='text-white flex  gap-x-2 h-[150px] overflow-hidden bg-black hover:shadow-md hover:shadow-black rounded '>
//    <div className=''><div className='w-[100px] h-[150px] bg-gray-700 rounded flex  items-center text-center'>image not found </div></div>   
//       <div className='overflow-auto'>
//    <h1 className='text-red-600 font-bold text-lg mb-2'>title</h1>
//    <p>overview not available</p>
//     </div>
  
   
//     </div>
  
//   )
// }

// export default Shimmer

const ShimmerCard = () => {
  return (
    <div className="py-2 items-center px-4 bg-black flex gap-4 rounded-lg overflow-hidden w-full  h-[150px]">
      {/* Shimmer for the image */}
      <div className="w-24 h-32 shimmer rounded-md"></div>

      {/* Shimmer for the text */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="w-3/4 h-6 shimmer rounded-lg mb-4"></div>
          <div className="w-full h-4 shimmer rounded-lg mb-2"></div>
          <div className="w-5/6 h-4 shimmer rounded-lg mb-2"></div>
          <div className="w-4/5 h-4 shimmer rounded-lg mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
