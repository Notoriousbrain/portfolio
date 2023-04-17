import { useNavigate } from "react-router-dom";
import { shop, nftMarketplace, dashboard, crowdFunding } from "../assets";


const ProjectCard = ({ id, title, description, link }) => {
  const navigate = useNavigate();

  const toProjectDetails = () => {
     navigate(`/project/${id}`, {
       state: { id, title, description, link },
     });
  }
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
  
    default:
      break;
  }
  return (
    <div onClick={toProjectDetails}>
      <div className="w-[300px] min-w-215 max-w-max xs:max-w-none sm:w-11/12 sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-my-black-3 bg-my-light rounded-xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-4 cursor-pointer shadow-md">
        <div className="relative w-full h-40 sm:h-36 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
          />
        </div>
        <div className="flex items-center flex-col">
          <p className="font-poppins sm:mt-3 dark:text-my-light text-my-black-1 font-semibold minlg:text-xl">
            {title}
          </p>
 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
