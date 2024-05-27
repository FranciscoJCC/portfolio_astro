import type { Projects } from "../types/Projects";

export const PROJECTS: Array<Projects> = [
    {
        id: "birssa",
        slug: "birssa",
        title: "SaaS Birssa",
        description: " Birssa is a multichannel web system for creating collection campaigns and facilitating the management of payment agreements with debtors. This web system is designed for any collection agency to be able to use it",
        urlProject: "https://www.birssa.com",
        photo: "/src/assets/projects/birssa.png",
        tags: ['Laravel', 'Vue', 'Vuetify','MySQL', 'Twilio', 'SendGrid'],
        main: true
    },
    {
        id: "gateway-app",
        slug: "gateway-app",
        title: "Gateway Fabrication",
        description: "A web application was developed to track purchase orders, inventories of computer equipment and control of responsive letters from collaborators, also control of inventories of supplies in warehouses. (available only on localhost)",
        urlGithub: "https://www.youtube.com",
        photo: "/src/assets/projects/gateway.png",
        tags: ['Laravel', 'Vue', 'Vuetify', 'MySQL', 'SQL Server'],
        main: true
    },
    {
        id: "tonersfull",
        slug: "tonersfull",
        title: "Web Page Toner´s Full",
        description: "I designed a website for the company Toner's Full, which is dedicated to selling toners and leasing multifunctional printers.",
        urlProject: "https://www.tonersfull.com",
        photo: "/src/assets/projects/tonersfull.png",
        tags: ['HTML5', 'Tailwind', 'PHP', 'Javascript'],
        main: true
    },
    {
        id: "agendacrit",
        slug: "agendacrit",
        title: "AgendaCRIT - Teletón",
        description: "A web application was developed so that patients' families could consult their upcoming appointments, their debt, the telephone directory and their absences",
        urlProject: "https://www.agendacrit.piilweb.com.mx",
        photo: "/src/assets/projects/agendacrit.png",
        tags: ['PHP', 'Jquery', 'MySQL', 'Bootstp', 'SQL Server'],
        main: true
    },
    {
        id: "platzi-store",
        slug: "platzi-store",
        title: "Platzi Store 👨‍🎓",
        description: "Project made only to practice angular and tailwind css. Site still under construction",
        urlProject: "https://store-two-chi.vercel.app/",
        urlGithub: "https://github.com/FranciscoJCC/angular_platzi_store",
        photo: "/src/assets/projects/api-rest-platzi.png",
        tags: ['Angular', 'Tailwind', 'API Fake Platzi'],
        main: false
    },
    {
        id: "sellers-api-apirest",
        slug: "sellers-api-apirest",
        title: "Sellers API REST 👨‍🎓",
        description: "Materials for a course we are preparing, which will be published on digital platforms. In this course, we will learn how to build a REST API using Node.js and Express. We will use PostgreSQL as our database and Sequelize to interact with it. Additionally, we will use Joi for schema validation and Boom.js to handle application errors effectively.",
        urlGithub: "https://github.com/FranciscoJCC/node_sellers",
        photo: "/src/assets/projects/api-rest-sellers.png",
        tags: ['Nodejs', 'Express', 'Sequelize', 'Joi', 'Passport', 'PostgreSQL'],
        main: false
    },
    {
        id: "platzi-api-rest-nestjs",
        slug: "platzi-api-rest-nestjs",
        title: "API REST NestJs 👨‍🎓",
        description: "Project made only to practice nestjs with Typescript and TypeORM. Site still under construction",
        urlProject: "https://www.google.com",
        urlGithub: "https://www.youtube.com",
        photo: "/src/assets/projects/api-rest-sellers.png",
        tags: ['Nestjs', 'Swagger', 'PostgreSQL', 'TypeORM'],
        main: false
    },
    
] as const;