// import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import AECOMLogo from "./assets/aecomlogo.jpg";
import DeimosLogo from "./assets/DeimosLogo.jpg";
import SheffieldUniLogo from "./assets/sheffieldunilogo.jpg";
import Northcoders from "./assets/northcoders.jpg";

export default function AboutMe() {
  return (
    <div className=" m-auto grid grid-rows-20 grid-cols-2 gap-2 mb-24 bg-gradient-to-l from-indigo-950 to-blue-900  md:grid-rows-20 md:grid-cols-5 w-full ">
      <div className="col-span-5 row-start-1 row-end-5 bg-blue-950 flex justify-center space-x-20 py-5">
        <Banner />
      </div>
      <div className="col-span-5 row-start-8 row-end-12  w-full min-h-min flex flex-col justify-between items-center">
        <h1 className="text-3xl text-white font-bold mt-2 flex font-sans shadow-md px-8 py-2">
          About Me
        </h1>
      </div>
      <div className="row-start-12 row-end-14 col-span-3 w-full  min-h-screen bg-blue-950 pr-5 ">
        <p className="text-xl text-white pl-5 pt-3">
          Graduating from the University of Sheffield with an Upper Second-Class
          Honours in Electrical Engineering (MEng), I worked at the major
          multi-national consultancy firm, AECOM, as an Electrical Engineer, I
          developed my communication, teamwork and collaboration skills.
        </p>
        <p className="text-xl text-white pl-5 pt-3">
          After AECOM, I wanted to explore my passion for software development
          and space and worked for almost 2 years as a GNSS Engineer, using C to
          develop features for satellite receivers.
        </p>
        <p className="text-xl text-white pl-5 pt-3">
          Through personal projects I really enjoyed software development and
          enrolled in the award-winning bootcamp, Northcoders, 13-week intense
          full-stack web development course that prioritises hands-on experience
          in creating projects from scratch.
        </p>
      </div>
      <div className="row-start-12 row-end-20 col-span-2 w-full  min-h-screen  ">
        {/* <h1 className="text-3xl">These are photos of the companies</h1> */}
        <div className="flex">
          <img src={SheffieldUniLogo} className="w-72" />
          <img src={AECOMLogo} className="w-48" />
        </div>
        <div className="flex">
          <img src={DeimosLogo} className="w-72" />
          <img src={Northcoders} className="w-48" />
        </div>
      </div>
    </div>
  );
}
