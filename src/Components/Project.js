import React from "react";
import TechIcon from "../Assets/icons/manager.png";
import { ProjectCardData } from "../Data/ProjectCardData";
import Swal from "sweetalert2";
import Fade from "react-reveal/Fade";

function Project() {
  const handleViewDemoButton = (id,source) => {
    if(id==1)
    {
      <a href={source}/>

    
    }
    else{
      Swal.fire({
        title: "<strong>OOPS </strong>",
        icon: "info",
        html: "This site is still under development ",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
      });
    }
   
  };

  return (
    <div id="ProjectSection" className="p-12 sm:pl-12 h-auto w-fit  ">
      <div className="flex flex-row justify-start ">
        <img src={TechIcon} className="h-16 mx-4 " />
        <h1 className="text-white justify-center text-6xl  ">My Projects</h1>
      </div>

      {/* //card */}

      {/* card2 */}
      <div className="p-1 mt-4 pt-8 h-fit  w-[900px]  md:w-[1200px] lg:w-[1400px] ">
        <Fade left cascade>
          <div className=" grid grid-cols-2 gap-8 lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-3 md:gap-2 ">
            {ProjectCardData.map((data) => (
              <div className="   h-[500px] w-96 md:w-[420px]  lg:w-[410px]  p-8  box bg-background shadow-xl shadow-slate-400 p-4 m-4 hover:bg-slate-50  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400 sm:w-50 ">
                <img
                  className="h-0 w-0  sm:h-24 sm:w-full  shadow-lg    "
                  src={data.image}
                />

                <div className=" w-fit  mt-2 ">
                  <h3 className="   text-center  text-2xl sm:text-xl text-white w-fit pr-8 md:w-fit md:pr-0  ">
                    {data.title}
                  </h3>
                </div>

                <div className="mt-4">
                  <h1 className="text-white ">{data.description}</h1>
                </div>

                <div className="flex flex-row mt-4">
                  <a href={data.code} target="_blank">
                    <button className="text-black font-bold rounded border p-1 m-1 px-2 bg-yellow-500 ">
                      View Code
                    </button>
                  </a>

                  
                  <button
                    className="text-black font-bold border rounded p-1 m-1 px-2 justify-end bg-blue-700"
                    onClick={() => handleViewDemoButton(data.id,data.source)}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Fade>
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
