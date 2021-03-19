import faker from "faker";

const projects = [
  {
    title: "Weather Dashboard",
    deployed: "",
    github: "http//:github.com/crizk-crizk/",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/weather-dashboard.png", 
    //host images in amazon webservices AWS S3 image buckets. put link here. 
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "",
    github: "",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/WineLog.gif",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "",
    github: "",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/rec-thumbnail.png",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "",
    github: "",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/eat-da-burger_mockup.png",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "",
    github: "",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/day-scheduler.png",
    description: faker.lorem.paragraph(),
  },
  {
    title: "Wine Log",
    deployed: "",
    github: "",
    tech: ["JavaScript", "CSS5", "HTML5"],
    image: "/images/code-quiz.png",
    description: faker.lorem.paragraph(),
  }
];

export default projects;