import typescript from '../Assets/icons/typescript.png'
import cpp from '../Assets/icons/cpp.png'
import robo from "../Assets/robot.png";
import portfolio from '../Assets/portfolio.png'
import project from '../Assets/project.jpg'
import youtube from '../Assets/youtube.png';


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
      "title": "FITGIF",
      "description": " Fitgif web application allowing users to search workouts by body parts or exercise names and receive related GIFs using Rapid API. Utilized Tailwind CSS for styling to ensure a visually appealing and responsive user interface. Integrated Rapid API to fetch workout-related GIFs dynamically based on user search queries, enhancing user engagement and interaction. Implemented functionality to display additional data and similar YouTube videos related to selected exercises, providing users with comprehensive information and resources. Included a Health Tracker feature named BMI Calculator, enabling users to calculate their Body Mass Index (BMI) for health assessment and tracking.",
      "image": "fitgif_image",
      "stack": ["React", "HTML", "Tailwind CSS", "JavaScript"],
      "demo": "https://example.com",
      "code": "https://github.com/shreyash2628/FitGIF",
      "id": 2
    },
    {
      "title": "YouTube Clone",
      "description": "YouTube clone web app allowing users to watch videos, view comments & explore shorts/reels content. Implemented features for searching videos & categorizing content. Utilized React.js, HTML, Tailwind CSS, & JavaScript for the frontend. Integrated Rapid API to fetch video content & comments dynamically. Deployed on GitHub Pages for public access.",      "image": youtube,
      "stack": ["React.js", "HTML", "Tailwind CSS", "JavaScript"],
      "demo": "https://shreyash2628.github.io/Youtube_Clone/",
      "code": "https://github.com/shreyash2628/Youtube_Clone",
      "id": 3
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