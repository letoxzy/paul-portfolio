const projects = [
  {
    id: 1,
    title: "GSM World",
    category: "Featured Project",
    description:
      "A modern e-commerce platform built for a real client with authentication, shopping cart, order management and interactive map selection.",

    image: "/projects/gsm-world.png",

    technologies: [
      "React",
      "Firebase",
      "Firestore",
      "Leaflet",
      "Vite",
    ],

    primaryButton: {
      text: "Live Website",
      link: "https://gsm-world.vercel.app",
    },

    secondaryButton: {
      text: "GitHub",
      link: "https://github.com/letoxzy/GSMWorld",
    },

    featured: true,
  },

  {
    id: 2,
    title: "Lumiflix",
    category: "Mobile Application",

    description:
      "A Flutter movie streaming application powered by Firebase with authentication, an admin dashboard and a modern Netflix-inspired interface.",

    image: "/projects/lumiflix.png",

    technologies: [
      "Flutter",
      "Firebase",
      "Dart",
    ],

    primaryButton: {
      text: "Watch Demo",
      video: "/videos/lumiflix-demo.mp4",
    },

    secondaryButton: {
      text: "GitHub",
      link: "https://github.com/letoxzy/lumiflix.git",
    },

    featured: false,
  },

  {
    id: 3,
    title: "Bank App",
    category: "Finance UI",

    description:
      "A clean and responsive Flutter banking application with animations, transaction history and modern financial dashboards.",

    image: "/projects/bank-app.png",

    technologies: [
      "Flutter",
      "Dart",
    ],

    primaryButton: {
      text: "Watch Demo",
      video: "/videos/bank-demo.mp4",
    },

    secondaryButton: {
      text: "GitHub",
      link: "https://github.com/letoxzy/BankApp",
    },

    featured: false,
  },

  {
    id: 4,
    title: "UI / UX Design",
    category: "Design",

    description:
      "Modern UI and UX designs created in Figma with a strong focus on usability and responsive layouts.",

    image: "/projects/uiux.png",

    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
    ],

    primaryButton: {
      text: "View Design",
      link: "https://www.figma.com/design/MyjBScMkU6ZM3QOe61hhSJ/Untitled?node-id=0-1&t=l6quGAu7viQ8TA1H-1",
    },

    featured: false,
  },
];

export default projects;