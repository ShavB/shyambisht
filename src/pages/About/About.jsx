import { useState } from "react";

function About() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/14w3g_VuhBi0z54ArqchWlRGQGyM_3OLN/view?usp=sharing"
    );
  };

  return (
    <div className="about w-full h-screen flex flex-col justify-center">
      <div className="w-[40%] text-left">
        Well, it's been quite the tech rollercoaster for me, your friendly
        neighborhood enthusiast! I've recently set sail on a daring quest to
        unravel the secrets of JavaScript.In my epic journey, I've also had the
        honor of spending a solid year as a full-stack developer at Acuity
        Knowledge Partners. React and C# .NET Core have become my trusty
        sidekicks in the world of coding.
      </div>
      <div className="" onClick={openResume}>
        Resume
      </div>
    </div>
  );
}

export default About;
