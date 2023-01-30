import React from "react";
import { TechUsed } from "../Data/TechUsed";
import TechIcon from "../Assets/icons/manager.png";
import Fade from 'react-reveal/Fade';

function Technology() {
  return (
    <div className="sm:pl-12  pt-24 ">
      <div className="flex flex-row justify-start">
        <img src={TechIcon} className="h-16 mx-4 " />
        <h1 className="text-white justify-center text-6xl  ">My Skills</h1>
      </div>

      <div className=" p-16 h-fit w-full  sm:pt-4 sm:h-fit  lg:w-fit sm:p-0 ">
        <div className=" h-fit w-screen font-bold ml-2 text-xl  ">
          <h1 className="text-white sm:text-black ">Scroll -></h1>
        </div>

        <Fade left cascade>

        <div className="flex    w-[800px] lg:w-[1300px] sm:w-screen  overflow-x-auto sm:grid sm:grid-cols-4 sm:mx-24   md:grid lg:grid lg:grid-cols-5 md:grid-cols-4    ">
          {TechUsed.map((data) => (
            <div className="   h-52 w-48   mx-2 p-8 box bg-background shadow-md shadow-yellow-400 p-4 m-4 hover:bg-slate-50  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400 sm:w-50 md:w-56">
              <img className="h-24 w-24    " src={data.image} />

              <div className=" w-fit  mt-2 ">
                <h3 className="px-8   text-start  text-lg sm:text-xl text-white w-fit mt-4  ">
                  {data.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        </Fade>
      </div>
    </div>
  );
}

export default Technology;
