import React from "react";

const skills = [
  {
    id: 1,
    title: "Software languages",
    description:
      "Java, JavaScript, React, Node.js, SQL, Python, NoSql, Sqlscripts and ABAP.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Fiori, interfaces, react, API, Vite, Next.JS, UI5, HTML5, CSS, Tailwindcss, Web DYNPro, BAPI.",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "MongoDB, BTP, Scrum, Rest, RAP, CDS, Agile, RICEF, BRF, RFC, Technical Integration, node.js, database, HANA, DATA Dictionary .",
  },
  {
    id: 4,
    title: "Cloud Development",
    description: (
      <p>
        {" "}
        "BTP, Firebase, MongoDB, Amazon Web Services, MySQL, HANA, Pipelines,
        API,Systems Integration, AWS, Azure, Data Extraction, Private Cloud,
        Data Migration, BDC, SLA."
      </p>
    ),
  },
  {
    id: 5,
    title: "SAP courses",
    description: (
      <p>
        "GL, WBS, Generative AI at SAP, Developing Data Models with SAP HANA
        Cloud, Learning how to use the SAP AI Core service on SAP Business
        Technology Platform, Configuring SAP Ariba Procurement, Practicing Clean
        Core Extensibility For SAP S/4HANA Cloud, Exploring the SAP Master Data
        Governance Deployments, Plant Maintenance, EAM, Certified SAP Backend
        cloud developer, Supply Chain, FICO, Implementing SAP Convergent
        Invoicing, CPI, Order to Cash, SAP Migration from Ecc to S/4Hanna,
        Implementation Experience."
      </p>
    ),
  },
  {
    id: 6,
    title: "AI & ML",
    description: "Deep lAlgorithms.",
  },
  {
    id: 7,
    title: "Soft skills",
    description: (
      <p>
        {" "}
        "management systems, Public Speaking, office 365, Team Culture, Program
        manager, Interpersonal Skills, Mentoring, Communication, Production
        Planning, Architectural Plans, Business Process, Discrete Manufacturing,
        Business Requirements, Direct Client Interaction, Working Experience,
        Written Communication ."
      </p>
    ),
  },
];
const Skills = () => {
  return (
    <div className="bg-blue-500 text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skills) => (
            <div
              key={skills.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {skills.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
              >
                {skills.title}
              </h3>
              <p className="mt-2 text-gray-300">{skills.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
