import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { Button } from ".";
import { useNavigate } from "react-router-dom";

const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "#technologies";
      case 2:
        return "#projects";
      default:
        return "/";
    }
  };

  return (
    <ul
      className={`list-none flex sm:justify-start flex-row ${
        isMobile && "flex-col h-full"
      }`}
    >
      {["Home", "Technologies", "Projects"].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
            if (isMobile) setIsOpen(false);
          }}
          className="flex  flex-row items-center pl-8 w-full md:text-[24px] font-poppins tracking-widest font-medium text-base dark:hover:text-my-light hover:text-my-dark ml-2 md:p-2 md:pb-5 dark:text-my-light text-my-black-1
          "
        >
          <a href={generateLink(i)}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, setIsOpen }) => {
  return (
    <Button
      btnName="Let's Connect"
      classStyles="mx-2 rounded-md md:w-full md:text-[20px] "
      handleClick={() => {
        setActive("");
        setIsOpen(false);
      }}
    />
  );
};


const Navbar = ({themeSwitch, isDark, setIsDark}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="flexBetween w-full z-10 p-4 flex-row border-b dark:bg-my-dark bg-my-light dark:border-my-black-1 border-my-gray-1">
      <div className="flex flex-1 space-x-8 sm:space-x-3 flex-row justify-start pl-16 xs:pl-5">
        <Link to="https://github.com/Notoriousbrain">
          <AiFillGithub size={28} color={isDark ? "#FFF5EE" : "#24252D"} />
        </Link>
        <Link to="https://www.linkedin.com/in/rohit-singh-7a8866248/">
          <AiFillLinkedin size={28} color={isDark ? "#FFF5EE" : "#24252D"} />
        </Link>
        <Link to="https://www.instagram.com/its.rohit._singh/">
          <AiOutlineInstagram
            size={28}
            color={isDark ? "#FFF5EE" : "#24252D"}
          />
        </Link>
      </div>

      <div className="flex mr-11 flex-row justify-start">
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-11">
            <a href="#message">
              <ButtonGroup
                setActive={setActive}
                setIsOpen={setIsOpen}
              />
            </a>
          </div>
        </div>

        <div className="flex items-center ml-8">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={themeSwitch}
          />
          <label
            htmlFor="checkbox"
            className="flex justify-between items-center w-8 h-4 dark:bg-my-dark bg-my-light rounded-2xl p-1 relative label"
          >
            <BsFillSunFill size={10} />
            <BsFillMoonFill color="white" size={10} />
            <div className="w-3 h-3 absolute dark:bg-my-dark bg-my-light rounded-full ball" />
          </label>
        </div>
      </div>

      <div className="hidden md:flex ">
        {isOpen ? (
          <RxCross2
            size={23}
            onClick={() => setIsOpen(false)}
            color={isDark ? "blue" : "red"}
          />
        ) : (
          <AiOutlineMenu
            size={23}
            onClick={() => setIsOpen(true)}
            color={isDark ? "blue" : "red"}
          />
        )}
        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-my-dark bg-my-light z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems
                active={active}
                setActive={setActive}
                isMobile
                setIsOpen={setIsOpen}
              />
            </div>
            <div className="pb-4 w-full flex justify-center border-t h-16 dark:border-my-black-1 border-my-gray-1">
              <ButtonGroup
                setActive={setActive}
                navigate={navigate}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
