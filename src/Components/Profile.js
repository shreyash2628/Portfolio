import React from "react";
import { Button } from "@material-tailwind/react";
import Particles from './Particles'


function Profile() {
 

  return (
    <div className=" w-full h-screen p-24">
      
      
      <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-white font-bold    ">
              <h1 className="pl-8 text-2xl"> Hi, I'm Shreyash Pawar</h1>
              <h2 className="text-4xl font-poppins mt-2 shadow-md shadow-slate-500 w-fit p-8">
                FRONT-END DEVELOPER
              </h2>
              {/* <button className='border p-1 mt-4 bg-green-600'>
Hire Me!
</button>  */}
              <h4 className="mt-6 font-medium italic text-white">
                - Passionate Software Engineer,who loves learning new techniques
                & technologies & build quality products
              </h4>
            </p>
          </div>

          <div className=" bg-black h-96 ml-4 max-w-full">
            <img src="" alt="" />
          </div>
        </div>


        <div className="border h-auto">
        </div>


    </div>
  );
}

export default Profile;
