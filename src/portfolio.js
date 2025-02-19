// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import loading from "./assets/lottie/loading"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: loading,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alvin Tolentino",
  title: "Hi there, I'm Alvin",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with experience building web and mobile applications with JavaScript / Reactjs / Nodejs / Typescript and other various libraries and frameworks"
  ),
  resumeLink:
    "https://resume.creddle.io/resume/cks9moz2t4f", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Alvintol",
  linkedin: "https://www.linkedin.com/in/alvintol/",
  gmail: "inbox@alvintolentino.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Forever learning. Ambitiously exploring every tech stack on my path of life",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "Ruby",
      fontAwesomeClassname: "fa-solid fa-gem"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fa-solid fa-wind"
    },
    {
      skillName: "Rails",
      fontAwesomeClassname: "fa-solid fa-tornado"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fa-brands fa-angular"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fa-regular fa-keyboard"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fa-solid fa-atom"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "fa-brands fa-servicestack"
    },
    {
      skillName: "Socket.io",
      fontAwesomeClassname: "fa-solid fa-bolt"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "fa-brands fa-node-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa-solid fa-leaf"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lighthouse Labs",
      logo: require("./assets/images/lighthouse-labs-logo.jpeg"),
      subHeader: "Web Development Diploma",
      duration: "May 2022",
      desc: "Web Development Flex Program\n- Applications Development: Code deployments and hosting; UX/UI; Modern languages, frameworks, libraries; Focus on peer collaboration and pair programming\n- Computer Science: Algorithm design; Data structures and trees; Recursion and automation; Object-oriented programming\n- Software Engineering: Test-driven development; Critical analysis and evaluation of software; Source code version control and organization; Modularity and testability.\nSkill Stack:",
      descBullets: ['Javascript',
      'HTML/CSS',
      'Node.js',
      'React JS',
      'Ruby on Rails',
      'SQL and Relational Databases'
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Form-loco",
      companylogo: require("./assets/images/Formloco.png"),
      date: "June 2022 – Present",
      desc: "An Angular built, zero-low-code project for the creation, connecting and sharing of data through mobile forms.",
      descBullets: [
        "Contribute to the maintenance, client-requested debugging and feature implementation"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/piggyFinancial.png"),
      projectName: "Piggy Financial",
      projectDesc: "Virtual piggy bank tracker",
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/Alvintol/Piggy-Financial"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/carDB.png"),
      projectName: "Car-D-B",
      projectDesc: "Buy/Sell app revolving around vehicles as the products",
      footerLink: [
        {
          name: "See Project",
          url: "https://github.com/Alvintol/Car-D-B"
        }
      ]
    },
    {
      image: require("./assets/images/rates.png"),
      projectName: "Newest Skills",
      projectDesc: "Built a csv generator pulling historical mortgage rates with Python",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/Alvintol/historical-mortgage-rates"
        }
      ]
    },
    {
      image: require("./assets/images/Pomodoro.png"),
      projectName: "Most Recent Creation",
      projectDesc: "Cloned a Pomodoro Timer",
      footerLink: [
        {
          name: "Try it out!",
          url: "http://pomodoro-clone.alvintolentino.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's talk about a project or just say hi! My Inbox is always open.",
  number: "+1 (403) 973-6855",
  email_address: "inbox@alvintolentino.com",

};

// Twitter Section

const twitterDetails = {
  userName: "alvintol", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
