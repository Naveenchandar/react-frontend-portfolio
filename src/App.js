import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { personalData } from './components/profile';
import { carrierData } from './components/carrier';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  useEffect(() => {
    setResumeData(carrierData);
    setSharedData(personalData);
    document.title = `${personalData.basic_info.name} | ${personalData.basic_info.title}`;
  }, [])

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}

export default App;
