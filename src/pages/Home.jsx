import React from 'react'
import projects from '../assets/data/projects'

import { MyDetails, Technologies, ProjectCard, ContactMe } from '../components'


const Home = () => {
  return (
    <div>
      <MyDetails />
      <Technologies />
      <div className="dark:bg-my-dark bg-my-light flex flex-col pt-10">
        <h1 className="text-[30px] mdl:text-[25px] sm:text-[20px] xs:text-[15px] dark:text-my-light text-my-dark text-center ">
          My Projects
        </h1>
        <div className="flex flex-wrap w-full justify-center sm:flex-col sm:px-3">
          {projects.map((key,i) => (
            <ProjectCard
             key={projects[i].id}  
             id={projects[i].id}
             title={projects[i].title}
             description={projects[i].description}
             link={projects[i].link}
              />
          ))}
        </div>
      </div>
      <ContactMe />
    </div>
  );
}

export default Home