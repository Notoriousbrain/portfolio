import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import images from '../assets';

const MyDetails = () => {

  const [ text ] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "Blockchain Developer",
      "React Native Developer"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="dark:bg-my-dark bg-my-light flex md:hidden">
        <div className="w-3/5 lgm:w-[70%] flex flex-col md:w-full ">
          <h1 className="text-[40px] lgm:text-[35px] dark:text-my-light text-my-dark mt-[20%] ml-[10%] ">
            My name is Rohit Singh,
          </h1>
          <div className="flex text-[30px] lgm:text-[25px] dark:text-my-light text-my-dark h-32 md:h-20 ml-[10%] ">
            <h1 className="">
              <span>I am a {text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
          </div>
          {/* <h1 className="text-[20px] dark:text-my-light text-my-dark  "></h1> */}
        </div>
        <div className="flex justify-center items-center">
          <img src={images.headerImg} alt="hi" className=" " />
        </div>
      </div>
      <div className="dark:bg-my-dark bg-my-light hidden md:block">
        <div className="flex justify-center items-center ">
          <img src={images.headerImg} alt="hi" className=" w-1/2" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-[40px] sm:text-[30px] xs:text-[25px] dark:text-my-light text-my-dark ">
            My name is Rohit Singh,
          </h1>
          <div className="flex text-[30px] sm:text-[20px] xs:text-[15px] dark:text-my-light text-my-dark h-20 ">
            <h1 className="">
              <span>I am a {text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
          </div>
          {/* <h1 className="text-[20px] dark:text-my-light text-my-dark  "></h1> */}
        </div>
      </div>
    </>
  );
}

export default MyDetails