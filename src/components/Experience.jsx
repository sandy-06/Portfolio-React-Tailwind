import React from "react";

const experience = [
  {
    id: 1,
    title: "Small Business Owner",
    description: <p>"Consulting company based in the USA, specializing in web development and design."
     "Started in 2010, specializing in Growing and training sales teams then moved to web development and design."</p>
  },
  {
    id: 2,
    title: "SAP ABAP Developer",
    description: <p>"Worked at Infosys as an SAP ABAP developer consultant.Worked on project in the Utilities industry in both 
      ABAP and Plant Maintenance."</p>,
  },
  {
    id: 3,
    title: "Division Manager",
    description: <p>"Working with same Management for 30 years, developed, trained the top team in the country.
      Started as a sales person and grew to the Number 1 leader in the country. "</p>
  },
  {
    id: 4,
    title: "Sales Engineer",
    description:<p> "Sales engineer for a small consulting company. With lead engineer developed contracts for design build automation
      projects for manufacturing lines that gave a 7 year backlog of work. Developed and built a robotic endofector for cold working holes
      in airplanes for production purposes and presented at international conference of airline manufactures."</p>
  },
  {
    id: 5,
    title: "VP of Construction company",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Mechanical Engineer",
    description: "Promote your business with our digital marketing team.",
  },
];
const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {experience.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {experience.title}
              </h3>
              <p className="mt-2 text-gray-300">{experience.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
