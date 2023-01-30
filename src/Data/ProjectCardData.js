import typescript from '../Assets/icons/typescript.png'
import cpp from '../Assets/icons/cpp.png'
import robo from "../Assets/robot.png";
import portfolio from '../Assets/portfolio.png'
import project from '../Assets/project.jpg'


  export const ProjectCardData = [
    {
      title: 'My Own Portfolio Website',
      description: "Using React, HTML, Tailwind Css & Javascript, I created a portfolio website which will include details about me, such as my Skills, My Projects ,My Education Details and My Social Media Handles  . The App is called MyPortfolio and it is a simple app that allows people get to know about me.",
        image: portfolio,
        stack: ['Mongo', 'Express', 'React', 'Node'],
      demo: 'https://shreyash2628.github.io/Portfolio/',
      code: 'https://github.com/shreyash2628/Portfolio',
      id: 0,
    },
    {
      title: 'Kibo - POC',
       description:`React-Django based application for doing basic CRUD operations where user can Login/Signup using JWT Authentication,then
       Token is stored in localstorage to access other api,also the app is responsive`, 
      image: project,
      stack: ['React', 'JavaScript'],
      source: 'https://google.com',
      code: 'https://github.com/shreyash2628/react-frontend-poc',
      id: 1,
    },
    {
      title: 'project 3 ',
      description: " upcoming....",
        image: project,
        stack: ['React', 'WebRTC'],
      source: 'https://google.com',
      code: 'https://google.com',
      id: 2,
    },
    {
      title: 'project 4',
      description: "Upcoming...",
      image: project,
      stack: ['React', 'ChatEngine', 'Firebase'],
      source: 'https://google.com',
      code: 'https://google.com',
      id: 3,
    },
    {
        title: 'project 5',
        description: "Upcoming...",
        image: project,
        stack: ['React', 'ChatEngine', 'Firebase'],
        source: 'https://google.com',
        code: 'https://google.com',
        id: 4,
      },
    
  ];