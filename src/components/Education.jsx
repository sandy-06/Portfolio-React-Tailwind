import React from "react";

const education = [
  {
    id: 1,
    title: "University Of Washington",
    description: "Bachelors in Mechanical Engineering.",
  },
  {
    id: 2,
    title: "SAP ABAP Developer",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Division Manager",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Sales Engineer",
    description: "Combining both frontend and backend development skills.",
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
const Education = () => {
  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((education) => (
            <div
              key={education.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {education.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {education.title}
              </h3>
              <p className="mt-2 text-gray-300">{education.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
