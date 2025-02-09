import React from 'react'

export const  ShimmerForHomeCard = () => {
    
  return (<div className="h-48 w-full shimmer   rounded-md"></div>)
}



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
