import React from "react";

function BackgroundAnimated() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute flex">
        <span className="w-[30px] h-[30px] block bg-[#e5ff00] m-[0 4px] rounded-[50%] shadow-[0 0 0 10px #e5ff0044, 0 0 50px #e5ff00, 0 0 100px #e5ff00]"></span>
      </div>
    </div>
  );
}

export default BackgroundAnimated;
