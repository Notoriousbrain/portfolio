import React from 'react'
import { useLocation, Link } from 'react-router-dom';

import { shop, nftMarketplace, dashboard, crowdFunding, deliveroo } from "../assets";
import { BsImages } from 'react-icons/bs';

const ProjectDetails = () => {
     const { state }  = useLocation();
     const { id, title, description, link } = state;
      let imgUrl;
      switch (id) {
        case 1:
          imgUrl = shop;
          break;

        case 2:
          imgUrl = nftMarketplace;
          break;

        case 3:
          imgUrl = crowdFunding;
          break;

        case 4:
          imgUrl = dashboard;
          break;

        case 5:
          imgUrl = deliveroo;
          break;

        default:
          break;
      }
  return (
    <div className="dark:bg-my-dark bg-my-light flex py-8 sm:flex-col">
      <div className="w-1/2 px-6 sm:w-full sm:flex sm:items-center">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col px-6 w-1/2 sm:w-full sm:mt-4">
        <div className="px-3 mb-3 sm:px-0 ">
          <h1 className="font-poppins dark:text-my-light text-my-black-1 font-semibold text-xl pb-1  text-center">
            {title}
          </h1>
          <p className="font-poppins sm:mt-3 dark:text-my-light text-my-black-1 font-semibold minlg:text-xl mt-4 ">
            {description}
          </p>
        </div>
        <div className=" w-full px-1">
          <Link to={link}>
            <button
              type="button"
              className="border dark:border-my-black-1 text-lg minlg:text-lg py-4 sm:py-0 mb-3 px-3 minlg:px-8 font-poppins font-semibold text-my-dark dark:text-my-light mx-2 md:mx-0 rounded-md w-full md:w-full md:text-[20px] hover:bg-[#00CCBB] "
            >
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails