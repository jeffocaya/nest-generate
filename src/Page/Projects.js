import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div class="h-sceen bg-white text-black">
      <div>
        <Header />
        <div class="text-left pt-12 mb-4 ml-40 pb-4 pr-60">
          <div class="font-bold p-8 text-3xl">Projects</div>
          <div class="text-xl pr-80">
            From configuration to security, web apps to big data—whatever the
            infrastructure needs of your application may be, there is a Spring
            Project to help you build it. Start small and use just what you
            need—Spring is modular by design.
          </div>
        </div>
        <div class=" pt-8 pb-12 bg-secondary">
          <div class="px-60 pb-12">
            <div class="flex items-center space-x-4 pr-20 pl-12 pb-4 pt-4">
              <ProjectCard />
              <ProjectCard />
            </div>
            <div class="flex items-center space-x-4 pr-20 pl-12 pb-4 pt-4">
              <ProjectCard />
              <ProjectCard />
            </div>
            <div class="flex items-center space-x-4 pr-20 pl-12 pb-4 pt-4">
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
