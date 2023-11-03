import React from "react";
import HomeAutomatricula from "@/public/img/projects/automatricula/home.png";
import HomeApiAutomatricula from "@/public/img/projects/api-automatricula/api.png";
import HomePharma from "@/public/img/projects/pharma/home.png";
import {FiGithub} from "react-icons/fi"

const GithubIcon = React.createElement(FiGithub);

// projects data
export const FeaturedProjects = [
  {
      title: "Automatricula",
      description:
        "I developed this web application as part of my TFG. This application will allow students in Equatorial Guinea to register for the selectividad online and access their grades. It also provides schools with the possibility of pre-registering their students online.",
        tags: ["React", "JavaScript", "HTML", "CSS", "Python", "Django", "PostgreSQL"],
        imageUrl: HomeAutomatricula,
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/automatricula",
          }
        ]
      },
      {
        title: "API Automatricula",
        description:
          "Developed using the   . This API allows efficient communication between the backend and the frontend of the automatricula`s application",
        tags: ["Python", "  ", "Postman", "APIs", "Pytest"],
        imageUrl: HomeApiAutomatricula,
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/automatricula",
          }
        ]
      },
    {
      title: "PHARMA",
      description:
        "Web management system developed with PHP, JavaScript, MySQL, JQuery, Bootstrap and Ajax for the management of Inventory, HR, CRM, POS, Invoicing of a pharmacy",
      tags: ["PHP", "JavaScript", "MySQL", "Boostrap", "Jquery"],
      imageUrl: HomePharma,
      links: [
        {
          name: "Github",
          icon: GithubIcon,
          url: "https://github.com/Pascual-Eburi/pharma",
        }
      ]
    },
  ] as const;


export const OtherNotableProjects = [
      {
        title: "Personal Porfolio",
        description:
          "First iteration of my personal website built with React, Next.js App, Framer Motion, TypeScript, Tailwind CSS",
        tags: ["Typescript", "React Js", "Tailwind CSS", "Framer Motion", "Next.js", "Jest", "Cypress"],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/v1",
          }
        ]
      },
            {
        title: "Car Tracking App",
        description:
          "A Car Tracking Implementation using React, Java, Sockets, SpringBoot",
        tags: ["React Js", "Java", "Postman", "Web Sockets", "SpringBoot", "HTML", "CSS"],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/car-tracker",
          }
        ]
      },
            {
        title: "Price Tracker App ",
        description:
          "Next.js 13 & TypeScript eCommerce product Price Tracker",
        tags: ["Next.js", " TypeScript ", "Postman", "Web Scraping", "Data Scraping"],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/price-tracker",
          }
        ]
      },
            {
        title: "Laravel + Livewire Ecommerce",
        description:
          "Implementation of an online shop from scratch following SOLID principles and the MVC design pattern.",
        tags: ["PHP", "Livewire", "Laravel", "MVC", "MySQL", "MTML", 'CSS3', 'Pest', 'Laravel Dusk'],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/laravel_livewire_ecommerce",
          }
        ]
      },
            {
        title: "Larevel TDD CRUD APP",
        description:
          "Implementation of CRUD operations in laravel following the TDD development methodology.",
        tags: ["PHP", "Laravel", "PhpUnit", "JavaScript", "MySWL"],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/laravel-ajax-crud",
          }
        ]
      },
            
      {
        title: "Student Management System",
        description:
          "Web application developed using the MVC design pattern with PHP for the management of the MMESILÉ institute. It includes functions such as student enrolment management, student and teacher attendance, among others.",
        tags: ["PHP", "JavaScript", "JQuery", "CodeIgniter", "Bootstrap", "MySQL"],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/codeigniter-student-management-system",
          }
        ]
      },

            {
        title: "Stock Management System",
        description:
          "A minimal php procedural stock management system",
        tags: ["PHP", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
        links: [
          {
            name: "Github",
            icon: GithubIcon,
            url: "https://github.com/Pascual-Eburi/php-stock-management-app",
          }
        ]
      },
  ] as const;