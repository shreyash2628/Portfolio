import React from "react";
import { TechUsed } from "../Data/TechUsed";
import TechIcon from "../Assets/icons/manager.png";

function Technology() {
  return (
    <div className="pl-24  pt-24">
      <div className="flex flex-row justify-start">
        <img src={TechIcon} className="h-16 mx-4 " />
        <h1 className="text-white justify-center text-6xl  ">My Skills</h1>
      </div>

      <div className="p-16 h-screen w-full">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:mx-24  ">
          {TechUsed.map((data) => (
            <div className="box bg-background shadow-xl shadow-slate-500 p-4 m-4 hover:bg-slate-50  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400">
              <img className="h-24 w-fit " src={data.image} />

              <div className="justify-end">
                <h3 className=" text-xl text-white w-full mt-4 ml-1">
                  {data.name}
                </h3>
              </div>

              {/* <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2> */}
              {/* <h3 className=" text-xl text-black justify-center">{data.name}</h3> */}
              {/* <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
