import gradphoto from "../src/assets/linkedinprofile.png";
import ReactLogo from "./logo.svg";
import JSLogo from "./assets/JavaScript-logo.png";
import CLogo from "./assets/CLogo2.png";
import TSLogo from "./assets/typescriptlogo.png";
import LinkedInLogo from "./assets/linkedinlogo.png";
import GitHubLogo from "./assets/githublogo2.webp";

import { Banner } from "./Banner";

export default function MainPage() {
  return (
    <div className="flex flex-col min-w-full min-h-screen bg-gradient-to-l from-indigo-950 to-blue-950 md:flex md:flex-col md:w-1/2 md:min-h-screen md:bg-gradient-to-l md:from-indigo-950 md:to-blue-950">
      {/* Banner Section */}
      <div className="bg-blue-950 min-w-fit flex justify-center space-x-10 py-4 md:bg-blue-950 md:flex md:justify-center md:space-x-20 md:py-4">
        <Banner />
      </div>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col px-4 py-2 md:flex-grow md:flex md:flex-col md:items-center md:px-4 md:py-2">
        <div className="flex flex-col  w-full max-w-4xl md:flex md:flex-col md:items-center md:justify-center md:w-full md:max-w-4xl">
          <div className=" flex flex-col items-center justify-center md:flex md:flex-row md:items-start md:w-full md:max-w-4xl md:justify-center md:space-x-5">
            <div className="flex flex-col items-center justify-center md:mr-10">
              <h1 className="text-3xl text-white font-bold flex font-sans shadow-md md:text-5xl md:text-white md:font-bold md:mt-4 md:flex md:font-sans md:shadow-md">
                David Hanly-Greene
              </h1>
              <h2 className="text-white  text-2xl flex mt-2 shadow-md md:text-white md:text-3xl md:flex md:mt-2 md:shadow-md">
                Junior Software Developer
              </h2>
              {/* <h2 className="text-white text-xl flex mt-2 shadow-md">
                MEng Electrical Engineering (Upper Second-Class Honours)
              </h2> */}
              <p className="text-white  text-xs mt-2 md:text-white md:mt-2 md:text-xs md:w-96">
                Full-stack software developer with knowledge of full-stack
                development from the award-winning software development
                bootcamp, Northcoders and experience in embedded software and
                working for a major multi-national engineering consultancy firm.
                This website is a collection of my previous and current projects
                and information about me as a professional.
              </p>
            </div>
            <img
              src={gradphoto}
              className="w-64 rounded-xl mt-4  md:w-64 md:rounded-xl md:mt-2 md:ml-5"
              alt="Graduation photo"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5 md:flex md:items-center md:justify-center md:space-x-10 md:mt-32">
            <div className="bg-blue-950 h-56 pt-2 flex-col items-center">
              <img
                src={ReactLogo}
                className="w-28 animate-spin-slow  ml-6 "
                alt="React logo"
              />
              <p className="px-1 w-40  text-left ml-2 text-xs text-white mt-2 pb-1">
                React primarily learned through Northcoders and have developed
                multiple applications detailed on the projects page. I have also
                developed React Native applications.
              </p>
            </div>
            <div className="bg-blue-950 h-56 pt-2  flex-col items-center  justify-center">
              <img className="w-16 ml-12" src={TSLogo} />
              <p className="px-1 w-40 pt-3 text-left ml-2 text-xs text-white mt-2 pb-1">
                TypeScript primarily learned through Northcoders and personal
                projects further information detailed on the projects page.
              </p>
            </div>
            <div className="bg-blue-950 h-56 pt-2 flex-col items-center">
              <img className="w-16  ml-12" src={JSLogo} />
              <p className="px-1 w-40 pt-3 text-left ml-2 text-xs text-white mt-2 pb-1">
                JavaScript primarily learned through Northcoders and have
                developed multiple applications detailed on the projects page.
              </p>
            </div>
            <div className="bg-blue-950 h-56 pt-2 flex-col items-center">
              <img className="w-16  ml-12" src={CLogo} />
              <p className="px-1 w-40 pt-3 text-left ml-2 text-xs text-white mt-2 pb-1">
                Professional experience in C for approximately 2 years
                developing multiple features and projects, working as a GNSS
                Engineer.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex space-x-2 p-4 bg-gradient-to-l from-indigo-950 to-blue-950">
        <a href="https://www.linkedin.com/in/david-hanly-greene-136437158/">
          <img className="w-16" src={LinkedInLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/davidhcodes">
          <img className="w-16" src={GitHubLogo} alt="GitHub logo" />
        </a>
      </footer>
    </div>
  );
}
