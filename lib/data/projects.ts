import React from "react";
import HomeAutomatricula from "@/public/img/projects/automatricula/home.png";
import HomeApiAutomatricula from "@/public/img/projects/api-automatricula/api.png";
import HomePharma from "@/public/img/projects/pharma/home.png";
import {FiGithub} from "react-icons/fi"

const GithubIcon = React.createElement(FiGithub);

// projects data
export const projectsData = [
  {
      title: "Automatricula",
      description:
        "I developed this web application as part of my TFG. I used technologies such as React JS, Redux, JavaScript, Python, Django and PostgreSQL. This application will allow students in Equatorial Guinea to register for the selectividad online and access their grades. It also provides schools with the possibility of pre-registering their students online.",
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
          "Developed using the Django Rest Framework. This API allows efficient communication between the backend and the frontend of the automatricula`s application",
        tags: ["Python", "Django Rest Framework", "Postman", "APIs", "Pytest"],
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
        "Web management system developed with PHP, JavaScript, MySQL, JQuery, Bootstrap and Ajax for the management of Inventory, HR, CRM, POS, Invoicing of a pharmacy a pharmacy..",
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