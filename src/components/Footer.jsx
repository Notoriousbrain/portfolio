import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = ({isDark}) => {

  return (
    <footer className="dark:bg-my-dark bg-my-light flexCenter flex-col border-t dark:border-my-black-1 border-my-gray-1 sm:py-8 py-10">
      <div className="w-full minmd:w-4/5 flex-row flex justify-between sm:flex-col md:px-4 px-24 ">
        <div className="w-1/5 sm:w-full">
          <Link to="/">
            <button
              type="button"
              className="border dark:border-my-black-1 text-lg minlg:text-lg py-4  mb-3 px-3 minlg:px-8 font-poppins font-semibold text-my-dark dark:text-my-light mx-2 md:mx-0 rounded-md w-full md:w-full md:text-[20px] hover:bg-[#00CCBB] "
            >
              My Resume
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <h1 className="font-poppins dark:text-my-light text-my-black-1 font-semibold text-xl pb-4 sm:pb-0">
              Contact Details
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-poppins sm:mt-3 dark:text-my-light text-my-black-1 font-semibold minlg:text-xl">
              +91 7016961603
            </h1>
            <h1 className="font-poppins sm:mt-3 dark:text-my-light text-my-black-1 font-semibold minlg:text-xl">
              rohitsingh66604@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center sm:mt-4">
          <div>
            <h1 className="font-poppins dark:text-my-light text-my-black-1 font-semibold text-xl pb-4">
              My Socials
            </h1>
          </div>
          <div className="flex space-x-5">
            <a href="https://github.com/Notoriousbrain">
              <AiFillGithub
                size={28}
                color={isDark ? "#FFF5EE" : "#24252D"}
                className="mr-4"
              />
            </a>
            <a href="https://github.com/Notoriousbrain">
              <AiFillLinkedin
                size={28}
                color={isDark ? "#FFF5EE" : "#24252D"}
                className="mr-4"
              />
            </a>
            <a href="https://github.com/Notoriousbrain">
              <AiOutlineInstagram
                size={28}
                color={isDark ? "#FFF5EE" : "#24252D"}
                className="mr-4"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
