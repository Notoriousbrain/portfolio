import React from 'react'
import images from "../assets";

const Technologies = () => {
  return (
    <div className="dark:bg-my-dark bg-my-light  ">
      <h1 className="text-[30px] mdl:text-[25px] sm:text-[20px] xs:text-[15px] dark:text-my-light text-my-dark text-center ">Technologies I have worked with</h1>
      <div className=" flex gap-5 mt-[5%] ml-[5%] flex-wrap justify-center ">
        <img src={images.reactjs} alt="react" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.nodejs} alt="node" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.express} alt="express" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.mongodb} alt="mongodb" className=" w-10 h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6" />
        <img src={images.js} alt="js" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.nextjs} alt="next" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.github} alt="github" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.redux} alt="redux" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.tailwindcss} alt="tailwindcss" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
        <img src={images.solidity} alt="solidity" className=" w-12 h-10 sm:w-10 sm:h-8 xs:w-8 xs:h-6" />
      </div>
    </div>
  );
}

export default Technologies;