// import { Link } from "react-router-dom";
import gradphoto from "../src/assets/linkedinprofile.png";
import ReactLogo from "./logo.svg";
import JSLogo from "./assets/JavaScript-logo.png";
import CLogo from "./assets/CLogo2.png";
import TSLogo from "./assets/typescriptlogo.png";
import LinkedInLogo from "./assets/linkedinlogo.png";
import GitHubLogo from "./assets/githublogo2.webp";

import { Banner } from "./Banner";
// /home/dahg/Portfolio/Portfolio/portfolio/src/assets/graduationphoto.JPG

export default function MainPage() {
  return (
    <div className=" m-auto grid grid-rows-20 grid-cols-2 gap-2 mb-24 bg-gradient-to-l from-indigo-950 to-blue-950  md:grid-rows-20 md:grid-cols-5 w-full ">
      <div className="col-span-5 row-start-1 row-end-5 bg-blue-950 flex justify-center space-x-20 py-5">
        <Banner />
      </div>
      <div className="col-span-5 row-start-5 row-end-10 bg-gradient-to-l from-indigo-950 to-blue-950 w-full min-h-screen flex flex-col justify-between">
        <div className="flex items-start flex-grow w-full justify-center space-x-5 ">
          <div className=" mr-10">
            <h1 className="text-5xl text-white font-bold mt-10 flex font-sans shadow-md">
              David Hanly-Greene
            </h1>
            <h2 className="text-white text-3xl flex mt-5  shadow-md">
              Junior Software Developer
            </h2>
            {/* <h2 className="text-white text-xl flex mt-2  shadow-md">
              MEng Electrical Engineering (Upper Second-Class Honours)
            </h2> */}
            <p className="text-white mt-4 text-xs w-96">
              Welcome to my portfolio. I'm a junior software developer with
              knowledge of full-stack development from the award-winning
              software development bootcamp, Northcoders and experience in
              embedded software. This website is a collection of my previous and
              current projects and information about me as a professional.
            </p>
          </div>
          <img
            src={gradphoto}
            className="w-64  rounded-xl mt-7 ml-5 "
            alt="Graduation photo"
          />
        </div>
        <div className="flex items-center justify-center  space-x-20 pt-10">
          <div className="bg-blue-950 h-52  pt-2">
            <img
              src={ReactLogo}
              className="w-28 animate-spin-slow ml-6"
              alt="React logo"
            />
            <p className="px-1 w-40 text-left ml-2 text-xs text-white mt-2 pb-1">
              I learned React primarily through Northcoders and have developed
              multiple applications detailed on the projects page. I have also
              developed React Native applications
            </p>
          </div>
          <div className="bg-blue-950 h-52  pt-2">
            <img className="w-16 ml-12" src={TSLogo} />
            <p className="px-1 w-40  text-left ml-2 text-xs text-white mt-6 pb-1">
              I learned TypeScript primarily through Northcoders and personal
              projects further information detailed on the projects page
            </p>
          </div>
          <div className="bg-blue-950 h-52 pt-2">
            <img className="w-16 ml-12" src={JSLogo} />
            <p className="px-1 w-40 text-left ml-2 text-xs text-white mt-6 pb-1">
              I learned JavaScript primarily through Northcoders and have
              developed multiple applications detailed on the projects page
            </p>
          </div>
          <div className="bg-blue-950 h-52 pt-2 ">
            <img className="w-16 ml-12" src={CLogo} />
            <p className="px-1 w-40 text-left ml-2 text-xs text-white mt-6 pb-1">
              I used C for approximately 2 years developing multiple features
              and projects, working as an GNSS Engineer
            </p>
          </div>
        </div>
        <div className="flex space-x-2 ml-5 pb-4 fixed bottom-0 left-0  ">
          <a href="https://www.linkedin.com/in/david-hanly-greene-136437158/">
            <img
              className="w-16 mt-5 ml-2"
              src={LinkedInLogo}
              alt="LinkedIn logo"
            />
          </a>
          <a href="https://github.com/davidhcodes">
            <img
              className="w-16 mt-5 ml-2"
              src={GitHubLogo}
              alt="Github logo"
            />
          </a>
        </div>
        <footer className="w-full mb-14">
          {/* <div className="flex justify-center space-x-20">
            <Link className="link" to={`/AboutMe`}>
              <button>
                <h1 className="text-white font-semibold text-2xl">About</h1>
              </button>
            </Link>
            <Link className="link" to={`/ProjectPage}`}>
              <button>
                <h1 className="text-white font-semibold text-2xl">Projects</h1>
              </button>
            </Link>
          </div> */}
        </footer>
      </div>
    </div>
  );
}
