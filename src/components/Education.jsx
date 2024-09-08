import React from "react";

const education = [
  {
    id: 1,
    title: "University Of Washington",
    description: "Bachelors in Mechanical Engineering.",
  },
  {
    id: 2,
    title: "Southern Methodist University",
    description: "Full Stack Java certification with multiple projects on GitHub.",
  },
  {
    id: 3,
    title: "University of Arizona",
    description: "Full Stack JavaScript and Node.js certification with projects on GitHub.",
  },
  {
    id: 4,
    title: "SAP Learning Hub",
    description:<p>"Generative AI at SAP, EDeveloping Data Models with SAP HANA Cloud, Learning how to 
    use theSAP AI Core service on SAP Business Technology Platform, Configuring SAP Ariba Procurement, 
    Practicing Clean CoreExtensibility For SAP S/4HANA Cloud, Exploring the SAP Master Data Governance Deployments
     Plant Maintenance,EAM, Certified SAP Backend cloud developer, Implementing SAP Convergent Invoicing, CPI, Order
     to Cash, SAP Migration from Ecc to S/4Hanna, Implementation."</p>,
  },
  {
    id: 5,
    title: "Udemy, microsoft learning",
    description:<p> "Excel, Word, PowerPoint, Outlook, Git, github. AZ-900 certification and course, ai-900 course, ai-102 
    ai engineering course, az-104 development course."</p>,
  },
  {
    id: 6,
    title: "ZTM Academy,LinkedIn Learning, Coursera",
    description:<p>"Web developer from a-z, LLM, into to AI, AI for everyone,
     AI for business, AI for marketing, AI for healthcare."</p>,
  },
];
const Education = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 "id="education">
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
