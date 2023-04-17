import { useState, useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Axios from 'axios';

import { Button, Input } from "../components";
import images from "../assets";
import { useNavigate } from "react-router-dom";

const Create = ({isDark}) => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      description: "",
      github: "",
      image: "",
    });

    const handleClick = async () => {
      let {
      projectName,
      description,
      github,
      image,
      } = formData;

      if (
        !description ||
        !projectName ||
        !github ||
        !image
      )
        return alert("Please fill all the data");

      const res = await Axios.post(
        "https://portfolio-2cf75-default-rtdb.firebaseio.com/singleProjectData.json",
        formData
      );

      if (res.status === 200) {
        alert("Successfully added project");
        navigate("/all-projects");
      } else {
        alert("An error occurred, try again!!!");
      }
    };


  return (
    <div className="flex dark:bg-my-dark bg-my-light justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-my-light text-my-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          Create new Project
        </h1>


        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <Input
          inputType="input"
          title="Github Link"
          placeholder="Github Link"
          handleClick={(e) =>
            setFormData({ ...formData, github: e.target.value })
          }
        />
        <Input
          inputType="input"
          title="Image Link"
          placeholder="Image Link"
          handleClick={(e) =>
            setFormData({ ...formData, image: e.target.value })
          }
        />

        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create Project"
            classStyles="rounded-xl"
            // handleClick={() => createNFT(formInput, fileUrl, router)}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
