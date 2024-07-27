import gradphoto from "../src/assets/graduationphoto.JPG";
import ReactLogo from "./logo.svg";
import JSLogo from "./assets/JavaScript-logo.png";
import CLogo from "./assets/CLogo2.png";
// /home/dahg/Portfolio/Portfolio/portfolio/src/assets/graduationphoto.JPG
export default function MainPage() {
  return (
    <div className="bg-gradient-to-l from-indigo-950 to-blue-900 w-full min-h-screen flex flex-col justify-between">
      <div className="flex items-center justify-center flex-grow w-full mb-16">
        <div className="flex flex-row items-center justify-between w-full max-w-5xl px-4">
          <div className="flex flex-col items-start flex-1">
            <h1 className="text-7xl text-white font-bold mt-10 flex font-sans shadow-md">
              David Hanly-Greene
            </h1>
            <h2 className="text-white text-5xl flex mt-5 text-left shadow-md">
              Junior Software Developer
            </h2>
          </div>
          <img
            src={gradphoto}
            className="w-72 float-right rounded-xl mt-16"
            alt="Graduation photo"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mb-10 -mt-16">
        <img
          src={ReactLogo}
          className="w-28 animate-spin-slow"
          alt="React logo"
        />
        <img className="w-16" src={JSLogo} />
        <img className="w-16 ml-3" src={CLogo} />
      </div>
      <footer className="w-full mb-14">
        <div className="flex justify-center space-x-20">
          <button>
            <h1 className="text-white font-semibold text-2xl">About</h1>
          </button>
          <button>
            <h1 className="text-white font-semibold text-2xl">Projects</h1>
          </button>
        </div>
      </footer>
    </div>
  );
}
