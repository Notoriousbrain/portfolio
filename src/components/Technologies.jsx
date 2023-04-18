import React from 'react'

const Technologies = () => {
  return (
    <div className="dark:bg-my-dark bg-my-light" id="technologies">
      <h1 className="text-[30px] mdl:text-[25px] sm:text-[20px] xs:text-[15px] dark:text-my-light text-my-dark text-center ">
        Technologies I have worked with
      </h1>
      <div className=" flex gap-5 mt-[2%] ml-[5%] flex-wrap justify-center ">
        <i className="devicon-react-original colored text-[40px]"></i>
        <i className="devicon-express-original text-[40px]"></i>
        <i className="devicon-mongodb-plain colored text-[40px]"></i>
        <i className="devicon-solidity-plain text-[40px]"></i>
        <i className="devicon-nodejs-plain colored text-[40px]"></i>
        <i className="devicon-redux-original colored text-[40px]"></i>
        <i className="devicon-github-original text-[40px]"></i>
        <i className="devicon-tailwindcss-plain colored text-[40px]"></i>
        <i className="devicon-javascript-plain colored text-[40px]"></i>
        <i class="devicon-nextjs-original colored text-[40px]"></i>
      </div>
    </div>
  );
}

export default Technologies;