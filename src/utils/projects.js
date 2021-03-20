import faker from "faker";

const projects = [
  {
    title: "Weather Dashboard",
    deployed: "https://crizk-crizk.github.io/Weather-Dashboard/",
    github: "http://github.com/crizk-crizk/Weather-Dashboard/",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/weather-dashboard.png", 
    //host images in amazon webservices AWS S3 image buckets. put link here. 
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "https://project2-women-power.herokuapp.com/",
    github: "https://github.com/angelinama/wine-log",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/WineLog.gif",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Rec",
    deployed: "https://jimbopulos.github.io/rec-app/",
    github: "https://github.com/jimbopulos/rec-app",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/rec-thumbnail.png",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "https://log-my-burgers.herokuapp.com/",
    github: "https://github.com/crizk-crizk/eat-da-burger",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/eat-da-burger_mockup.png",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "https://crizk-crizk.github.io/Day-Scheduler/",
    github: "https://github.com/crizk-crizk/Day-Scheduler",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/day-scheduler.png",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "https://crizk-crizk.github.io/codeQuiz/",
    github: "https://github.com/crizk-crizk/codeQuiz",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/code-quiz.png",
    description: faker.lorem.paragraph(),
  }
];

export default projects;