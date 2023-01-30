import React from "react";
import { Button } from "@material-tailwind/react";
import img from "../Assets/imgBaner.png"

function Profile() {
 

  return (
    <div className="bg-background  sm:h-fit sm:w-fit w-full  flex flex-row h-screen  md:w-fit lg:w-fit p-20 ">
      
      
      <div className="flex flex-row mr-1 ">
          <div className="flex flex-col">
            <p className="text-white font-bold    ">
              <h1 className="pl-8 pt-8 text-8xl"> Hi, I'm Shreyash Pawar</h1>
              <h2 className="text-4xl font-poppins mt-2 shadow-md shadow-yellow-500 w-fit p-8">
                FRONT-END DEVELOPER
              </h2>
            
              <h4 className="mt-6 font-medium italic text-white">
                - Passionate Software Engineer,who loves learning new techniques
                & technologies & build quality products
              </h4>
            </p>
          </div>

         
        </div>


        <div className=" h-[500px] w-full sm:h-[500px]    ">
          <img src={img} className="h-[400px] w-[450px] sm:h-96  sm:mx-8 md:w-[900px] lg:w-[900px] lg:h-[500px] " />
        </div>


    </div>
  );
}

export default Profile;
