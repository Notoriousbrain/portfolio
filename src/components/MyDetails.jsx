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
          <h1 className="text-[40px] lgm:text-[35px] dark:text-my-light text-my-dark mt-[10%] ml-[10%] ">
            My name is Rohit Singh,
          </h1>
          <div className="flex text-[30px] lgm:text-[25px] dark:text-my-light text-my-dark  md:h-20 ml-[10%] ">
            <h1 className="">
              <span>I am a {text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
          </div>
          <p className="text-[20px] mt-5 dark:text-my-light text-my-dark ml-[10%]">
            Are you looking for the perfect software developer who has expertise
            in creating a{" "}
            <span className="font-semibold">Full Stack Website</span>,
            <span className="font-semibold"> Blockchain dApps </span>
            and{" "}
            <span className="font-semibold">
              React Native Applications for Ios and Android
            </span>
            ?
          </p>
          <p className="text-[20px] mt-5 dark:text-my-light text-my-dark ml-[10%]">
            Then you are in right place. Get the professional results you are
            looking for. Your work will be done on time ans as per your
            requirement. Just reach out and let us know your needs.
          </p>
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
          <h1 className="sm:text-[30px] xs:text-[25px] dark:text-my-light text-my-dark ">
            My name is Rohit Singh,
          </h1>
          <div className="flex text-[30px] sm:text-[20px] xs:text-[15px] dark:text-my-light text-my-dark  ">
            <h1 className="">
              <span>I am a {text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
          </div>
          <div className="flex flex-col justify-center w-4/5">
            <p className="text-[10px] mt-5 dark:text-my-light text-my-dark ">
              Are you looking for the perfect software developer who has
              expertise in creating a{" "}
              <span className="font-semibold">Full Stack Website</span>,
              <span className="font-semibold"> Blockchain dApps </span>
              and{" "}
              <span className="font-semibold">
                React Native Applications for Ios and Android
              </span>
              ?
            </p>
            <p className="text-[10px] mt-5 dark:text-my-light text-my-dark mb-6">
              Then you are in right place. Get the professional results you are
              looking for. Your work will be done on time ans as per your
              requirement. Just reach out and let us know your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyDetails