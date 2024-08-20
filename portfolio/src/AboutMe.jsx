// import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import AECOMLogo from "./assets/aecomlogo.jpg";
import DeimosLogo from "./assets/DeimosLogo.jpg";
import SheffieldUniLogo from "./assets/sheffieldunilogo.jpg";
import Northcoders from "./assets/northcoders.jpg";

export default function AboutMe() {
  return (
    <div className=" m-auto grid grid-rows-20 grid-cols-2  mb-24  bg-gradient-to-l from-indigo-950 to-blue-950  md:grid-rows-20 md:grid-cols-5 md:w-full ">
      <div className="bg-blue-950 row-start-1 row-end-8 col-span-2 space-x-10 items-center justify-center flex   py-4  md:row-start-1 md:row-end-5 md:col-span-5 md:bg-blue-950 md:flex md:justify-center md:space-x-20 md:py-4">
        <Banner />
      </div>
      <div className=" col-span-2 row-start-8 row-end-12  w-full min-h-min flex flex-col justify-between items-center md:col-span-5  md:row-start-8  md:row-end-12   md:w-full  md:min-h-min  md:flex  md:flex-col  md:justify-between md:items-center ">
        <h1 className="text-3xl text-white font-bold font-sans shadow-md px-8 py-2 md:text-3xl md:text-white md:font-bold md:mt-2 md:flex md:font-sans md:shadow-md md:px-8 md:py-2">
          About Me
        </h1>
      </div>
      <div className="row-start-12 row-end-14 col-span-2 space-y-3   bg-blue-950  md:row-start-12 md:row-end-14 md:col-span-3 md:w-full  md:h-1/3 md:bg-blue-950 md:pr-12 md:pl-10 ">
        <p className="text-sm px-4 text-white  md:text-xl md:text-white md:pl-5 md:pt-3">
          Graduating from the University of Sheffield with an Upper Second-Class
          Honours Masters in Electrical Engineering (MEng), I worked at the
          major multi-national consultancy firm, AECOM, as an Electrical
          Engineer, where I developed my communication, teamwork and
          collaboration skills.
        </p>
        <p className="text-sm px-4 text-white md:text-xl md:text-white md:pl-5 md:pt-3">
          After AECOM, I wanted to explore my passion for software development
          and space and worked for almost 2 years as a GNSS Engineer, using C to
          develop features for satellite receivers.
        </p>
        <p className="text-sm px-4 text-white  md:text-xl md:text-white md:pl-5 md:pt-3">
          Through personal projects I really enjoyed software development and
          enrolled in the award-winning bootcamp, Northcoders, an intense
          full-stack web development course that prioritises hands-on experience
          in creating projects from scratch.
        </p>
      </div>
      <div className="row-start-14 row-end-20 col-span-2 mt-4 min-h-screen md:row-start-12 md:row-end-20 md:col-span-2 md:w-full  md:min-h-screen  ">
        {/* <h1 className="text-3xl">These are photos of the companies</h1> */}
        <div className="flex md:flex">
          <img src={SheffieldUniLogo} className="w-1/2   md:w-72" />
          <img src={AECOMLogo} className=" w-1/2 md:w-48" />
        </div>
        <div className="flex md:flex">
          <img src={DeimosLogo} className="w-1/2 md:w-72" />
          <img src={Northcoders} className="w-1/2 md:w-48" />
        </div>
      </div>
    </div>
  );
}
