import React from "react";
import TechIcon from "../Assets/icons/manager.png";
import robo from "../Assets/robot.png";
import { ProjectCardData } from "../Data/ProjectCardData";
import Swal from 'sweetalert2'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Project() {

    const handleViewDemoButton = () =>
    {
        Swal.fire({
            title: '<strong>OOPS </strong>',
            icon: 'info',
            html:
              'This site is still under development ' ,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            
          })
    }



  return (
    <div className="p-24  h-auto  ">
      <div className="flex flex-row justify-start">
        <img src={TechIcon} className="h-16 mx-4 " />
        <h1 className="text-white justify-center text-6xl  ">My Projects</h1>
      </div>

      {/* //card */}

     

{/* card2 */}
      <div className="p-16 h-full w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   ">
          
          {
          ProjectCardData.map((data) => (
            <div className="box bg-background shadow-xl shadow-slate-500 p-4 m-4   transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110  duration-400">
              <img className="h-24 w-fit " src={data.image} />

              <div className=" h-6  mt-5">
              <h1 className="text-white text-center text-xl font-bold font-poppins ">{data.title}</h1>

              </div>

              {console.log(data.stack)}

              <div className=" h-80 ">
                <h3 className="text-white mt-4  h-48 ">
                    {data.description}
                </h3>
                {/* <h3 className=" text-xl text-center text-white w-full mt-1 ml-1 flex flex-nowrap">
                  {data.stack.map((tech, j) => (
                    <div className="flex ">
                    <h1 key={j} className="flex mx-1 border p-1 text-sm w-20">{tech}</h1>

                    </div>
                  ))}
                </h3> */}
                <div className="flex flex-row mt-4">
                    <button className="text-black font-bold rounded border p-1 m-1 px-2 bg-yellow-500">
                        View Code 
                    </button>
                    <button className="text-black font-bold border rounded p-1 m-1 px-2 justify-end bg-blue-700" onClick={()=>handleViewDemoButton()}>
                        Live Demo
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




    </div>
  );
}

export default Project;

// {
//     name: "Project Name",
//     image: typescript,
//     about:"About the project",
//     stack:{
//         tech:['html','css','tailwind','javascript','react']
//     },
