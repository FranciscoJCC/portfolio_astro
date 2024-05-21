import type { Projects } from "../types/Projects";

export const PROJECTS: Array<Projects> = [
    {
        id: "birssa",
        slug: "birssa",
        title: "SaaS Birssa",
        description: " Birssa is a multichannel web system for creating collection campaigns and facilitating the management of payment agreements with debtors. This web system is designed for any collection agency to be able to use it",
        urlProject: "https://www.birssa.com",
        photo: "src/images/projects/birssa.png",
        tags: ['Laravel', 'Vue', 'Vuetify','MySQL', 'Twilio', 'SendGrid'],
        main: true
    },
    {
        id: "gateway-app",
        slug: "gateway-app",
        title: "Gateway Fabrication",
        description: "A web application was developed to track purchase orders, inventories of computer equipment and control of responsive letters from collaborators, also control of inventories of supplies in warehouses. (available only on localhost)",
        urlGithub: "https://www.youtube.com",
        photo: "src/images/projects/gateway.png",
        tags: ['Laravel', 'Vue', 'Vuetify', 'MySQL', 'SQL Server'],
        main: true
    },
    {
        id: "tonersfull",
        slug: "tonersfull",
        title: "Web Page Toner´s Full",
        description: "I designed a website for the company Toner's Full, which is dedicated to selling toners and leasing multifunctional printers.",
        urlProject: "https://www.tonersfull.com",
        photo: "src/images/projects/tonersfull.png",
        tags: ['HTML5', 'Tailwind', 'PHP', 'Javascript'],
        main: true
    },
    {
        id: "agendacrit",
        slug: "agendacrit",
        title: "AgendaCRIT - Teletón",
        description: "A web application was developed so that patients' families could consult their upcoming appointments, their debt, the telephone directory and their absences",
        urlProject: "https://www.agendacrit.piilweb.com.mx",
        photo: "images/projects/agendacrit.png",
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
        photo: "src/images/projects/api-rest-platzi.png",
        tags: ['Angular', 'Tailwind', 'API Fake Platzi'],
        main: false
    },
    {
        id: "sellers-api-apirest",
        slug: "sellers-api-apirest",
        title: "Sellers API REST 👨‍🎓",
        description: "lorem impsun description of profject example text of description item card example",
        urlGithub: "https://github.com/FranciscoJCC/node_sellers",
        photo: "src/images/projects/api-rest-sellers.png",
        tags: ['Nodejs', 'Express', 'Sequelize', 'Joi', 'Passport', 'PostgreSQL'],
        main: false
    },
    {
        id: "platzi-api-rest-nestjs",
        slug: "platzi-api-rest-nestjs",
        title: "API REST NestJs 👨‍🎓",
        description: "lorem impsun description of profject example text of description item card example",
        urlProject: "https://www.google.com",
        urlGithub: "https://www.youtube.com",
        photo: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-05/whatis_rest_api.webp",
        tags: ['Nestjs', 'Swagger', 'PostgreSQL', 'TypeORM'],
        main: false
    },
    
] as const;