import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
    {
      title: "System Administrator Intern",
      location: "NTT DATA, Murcia - Spain",
      description:
        "Manage and resolve or escalate incident tickets reported by customers. Prepare and send communications to customers to inform them about the resolution of their incident or complaint.Follow up on resolved tickets to ensure effective resolution and customer satisfaction..",
      icon: React.createElement(CgWorkAlt),
      date: "March - June 2023",
    },
    {
      title: "Web Developer Freelancer",
      location: "UPWORK, Remote",
      description:
        "I worked as a freelancer identifying and solving technical problems on existing websites improving their functionality. Designing, creating and maintaining online shops, increasing business sales. Resolving customer queries and problems effectively.",
      icon: React.createElement(CgWorkAlt),
      date: "October 2021 - March 2023",
    },
    {
      title: "Administrative Assistant",
      location: "BITNOVA S.L, Murcia - Spain",
      description:
        "Resolve issues with customers and suppliers, maintaining clear and friendly communication to ensure customer satisfaction.Supervise, organise and manage inventory, ensuring accurate stock control and optimising operating costs.",
      icon: React.createElement(CgWorkAlt),
      date: "March - June 2021",
    },
  ] as const;