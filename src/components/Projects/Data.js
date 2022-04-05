export const homeObjOne = {
    primary: true,
    lightBg: false,
    imgStart: "",
    lightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Deployed Link",
    descriptionTitle0: "Technologies",
    description0: "| React | Node.js (Nest JS) | TypeORM | Postgresql | Heroku |",
    descriptionTitle1: "Why this app?",
    description1:
        "An english academy had trouble testing students over zoom classes due to the COVID-19. " +
        "They needed a way to manage student's score and progress.",
    descriptionTitle2: "Project experience",
    description2:
        "Picked up on new technologies (Nest js, TypeORM, React Hook) to add structure for fast development process." +
        " Required reading documentations, articles, and referencing videos.",
    descriptionTitle3: "What I did in the project",
    description3:
        "Developed a full-stack app. Built frontend using react and used jwt for " +
        "authorization/authentication. Designed a database using Postgresql. Built an API with Nest js to take advantage of Typescript and quick development." +
        " CI/CD deployment using github actions and heroku.",
    descriptionTitle4: "Outcome",
    description4:
        "Over 80 students at the EiE academy benefited by being able to access vocabulary list on phones without looking at the printouts. " +
        "Teachers were able to better organize individual student's test results and assign re-tests.",
    headline: "Take and Manage Exams Through Online",
    lightText: true,
    topLine: "Academy App",
    img: require("../../images/app_demo_2.png").default,
    alt: "Image",
    start: "true",
    buttonLink: "https://aisenkim.github.io/academy-frontend/#/",
    githubLink: "https://github.com/aisenkim/academy-refactor",
};

export const homeObjTwo = {
    primary: false,
    lightBg: true,
    imgStart: "start",
    lightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "Deployed Link",
    descriptionTitle0: "Technologies",
    description0:
        "| React | Redux | Bootstrap | Spring Boot | MongoDB | AWS | Docker | NGINX |",
    descriptionTitle1: "Why this app?",
    description1:
        "This project started as a warm up project for the cloud computing course. The requirements were simple but" +
        "I went beyond the requirements by improving UI and adding more functionalities. Users can sign-up, verify email, login, play " +
        ", and check game history. Game state is saved using sessions.",
    descriptionTitle2: "Project experience",
    description2:
        "Learned Redux to easily manage state and work with predictable states. " +
        "Application deployed on AWS EC2 instance using docker compose to run the container. Initially deployed on UpCloud server " +
        "for the assignment but transferred to EC2 attached to my domain. Managing multiple applications on the container using NGINX reverse " +
        "proxy. All applications are ready to scale out easily using docker containers.",
    descriptionTitle4: "Outcome",
    description4:
        "Able to learn Redux to manage state in a different way. Solidified NGINX technology to reverse proxy to different applications.",
    headline: "Warm-Up Project for Cloud Computing(CSE 356)",
    lightText: true,
    topLine: "Tic Tac Toe App",
    img: require("../../images/app_demo_ttt.jpg").default,
    alt: "Image",
    start: "true",
    buttonLink: "https://aisencode.com/ttt",
    githubLink: "https://github.com/aisenkim/tic-tac-toe-combined",
};

export const homeObjThree = {
    primary: true,
    lightBg: false,
    imgStart: "",
    lightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Repository Link",
    descriptionTitle0: "Technologies",
    description0: "| Spring Boot | Spring Cloud | Eureka | Postgresql | JPA | RabbitMQ | Zipkin | Docker | Maven |",
    descriptionTitle1: "Why this app?",
    description1:
        "When building monolithic applications, I was always curious about scaling the system when users suddenly grow or shrink." +
        "To learn about a scalable architecture, I built a registration system where it is divided into 3 main services (Customer, Fraud, Notification).",
    descriptionTitle3: "Improvements",
    description3:
        "1. Refactor current service to use Kubernetes for service discovery(replace Eureka) and manage containers. 2. Add more services " +
        "to create an academic application for my sister's future business.",
    descriptionTitle4: "Outcome",
    description4:
        "Gained knowledge on how microservices architecture can be applied and how services can be scaled out using Docker.",
    headline: "Microservices Registration System",
    lightText: true,
    topLine: "Aisenservices",
    img: require("../../images/aisenservices.png").default,
    alt: "Image",
    start: "true",
    buttonLink: "https://github.com/aisenkim/aisenservices",
    githubLink: "https://github.com/aisenkim/aisenservices",
};

export const toyProject1 = {
    primary: true,
    lightBg: false,
    imgStart: "start",
    lightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Play Game",
    headline: "HTML/CSS/JS Game",
    lightText: true,
    topLine: "Plane Game",
    img: require("../../images/planeGame.png").default,
    alt: "Image",
    descriptionTitle0: "Project Description",
    description0: "After my internship at Busidol, I have applied the game design pattern I learned to this project",
    start: "true",
    buttonLink: "https://aisencode.com/planeGame",
    githubLink: "https://github.com/aisenkim/planeGame",
};

export const toyProject2 = {
    primary: true,
    lightBg: false,
    imgStart: "",
    lightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Play Game",
    headline: "Mobile Friendly Game",
    lightText: true,
    topLine: "Game 2048",
    img: require("../../images/game2048.png").default,
    alt: "Image",
    descriptionTitle0: "Project Description",
    description0: "This is another project that I built after my internship. Applied jquery touch events to enable use on mobiles.",
    start: "true",
    buttonLink: "https://aisencode.com/game2048",
    githubLink: "https://github.com/aisenkim/Game2048",
};