import React from "react";
import SANDRAResume from "../assets/SANDRA Resume.pdf";

export default function resume() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">
        Sandra Sanders resume
      </h1>
      <img src={SANDRAResume} alt="SANDRA Resume" />
    </div>
  );
}
