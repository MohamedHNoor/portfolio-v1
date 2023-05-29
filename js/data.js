// import car from '../assets/images/car-rental.JPG';
// import space from '../assets/images/space-travel.JPG';
// import budget from '../assets/images/budget-app.JPG';

const projects = [
  {
    id: 1,
    img: '../assets/images/car-rental.jpeg',
    name: 'Car Rentals App',
    tecks: ['ruby on rails', 'react', 'redux', 'JWT', 'PostgreSQL'],
    text: 'A full-stack app that allows users to signup, see a list of cars, and reserve or manage reservations. It uses a proper authentication system',
    live: 'https://wheelsaway-app.vercel.app/',
    code: 'https://github.com/MohamedHNoor/Cars-Rental-FrontEnd',
  },
  {
    id: 2,
    img: '../assets/images/budget-app.jpeg',
    name: 'Budget App',
    tecks: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Devise', 'RSpec'],
    text: 'A full stack mobile application that allows users to signup and create categories and add transactions to each category',
    live: 'https://budget-app-wtfx.onrender.com/',
    code: 'https://github.com/MohamedHNoor/Budget-app',
  },
  {
    id: 3,
    img: '../assets/images/space-travel.jpeg',
    name: 'Space Travels',
    tecks: ['React', 'Redux', 'JavaScript', 'Rest API'],
    text: 'A front-end web application that displays SpaceX Rockets using their API. Users can rent their favorite rockets and register for SpaceX missions',
    live: 'https://space-travelers-bso5.onrender.com/',
    code: 'https://github.com/MohamedHNoor/space-travelers',
  },
  {
    id: 4,
    img: '../assets/images/todo-list.jpeg',
    name: 'Todo List',
    tecks: ['React', 'JavaScript', 'CSS3'],
    text: 'This is a to-do list app where you can add, delete, submit and edit items. Double-click on an item to edit it, and press enter to resubmit',
    live: 'https://mohamedhnoor.github.io/react-todo-app/',
    code: 'https://github.com/MohamedHNoor/react-todo-app',
  },
];

export default projects;
