// import React from "react";
// import Profile from "../Assets/pro.png";
// function Navbar() {
//   return (
//     <div className="bg-white ">

//       <div className="flex flex-row  justify-start">
//         <div className="flex ">
//           <h1>Hi. I am Shreyash</h1>
//         </div>

//       </div>

//         <div className="flex justify-end">
//           <button>Home</button>

//           <btn>Projects</btn>
//           <btn>About Me</btn>

//           <button>Contact</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import { Button } from "@material-tailwind/react";

// export default function NavBar() {
//     const [navbar, setNavbar] = useState(false);

//     return (
//         <nav className="w-full bg-purple-500 shadow">
//             <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//                 <div>
//                     <div className="flex items-center justify-between py-3 md:py-5 md:block">
//                         <a href="javascript:void(0)">
//                             <h2 className="text-2xl font-bold text-white">LOGO</h2>
//                         </a>
//                         <div className="md:hidden">
//                             <button
//                                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                                 onClick={() => setNavbar(!navbar)}
//                             >
//                                 {navbar ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-white"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6 text-white"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div
//                         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                             navbar ? "block" : "hidden"
//                         }`}
//                     >
//                         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">Home</a>
//                             </li>
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">Blog</a>
//                             </li>
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">About US</a>
//                             </li>
//                             <li className="text-white hover:text-indigo-200">
//                                 <a href="javascript:void(0)">Contact US</a>
//                             </li>
//                         </ul>

//                         <div className="mt-3 space-y-2 lg:hidden md:inline-block">
//                     {/* <a
//                         href="javascript:void(0)"
//                         className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
//                     >
//                         Sign in
//                     </a>
//                     <a
//                         href="javascript:void(0)"
//                         className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
//                     >
//                         Sign up
//                     </a> */}
//                 </div>
//                     </div>
//                 </div>

//                 {/* <div className="hidden space-x-2 md:inline-block">
//                     <a
//                         href="javascript:void(0)"
//                         className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
//                     >
//                         Sign in
//                     </a>
//                     <a
//                         href="javascript:void(0)"
//                         className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
//                     >
//                         Sign up
//                     </a>
//                 </div> */}
//             </div>

//             <Button>Button</Button>
//         </nav>
//     );
// }

import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contacts
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <div className="bg-background h-12  flex justify-start p-2">
        <button className="  sm:text-white text-sm sm:text-2xl text-black  ">
          Portfolio
        </button>

        <div className="   flex flex-row justify-end w-screen  md:px-36 ">
          <button className="text-white mx-1 px-1 font-bold  md:mx-2 md:px-2 lg:mx-2 lg:px-2 sm:mx-2 sm:px-2 hover:underline">
            Home
          </button>

          <button className="text-white   font-bold md:mx-2 md:px-2 lg:mx-2 lg:px-2 sm:mx-2 sm:px-2 hover:underline">
            Project
          </button>

          <button className="text-white   font-bold w-24 lg:w-auto sm:w-auto md:mx-2 md:px-2 lg:mx-2 lg:px-2 sm:mx-2 sm:px-2 hover:underline">
            About Me
          </button>

          <button className="text-white   pr-12 font-bold md:mx-2 md:px-2 lg:mx-2 lg:px-2 sm:mx-2 sm:px-2 hover:underline">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
