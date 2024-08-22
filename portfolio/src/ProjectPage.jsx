import { Banner } from "./Banner";
import HGNews from "./assets/hgnewsapp.png";
import Github from "./assets/githublinklogo.png";
import GithubF from "./assets/githubfrontend.png";
import GithubB from "./assets/githubbackend.png";
import PopcornerVideo from "./assets/videos/PopcornerMP4Video.mp4";
import PopcornerPoster from "./assets/PopcornerPoster.png";
import WeatherApp from "./assets/weatherapp2.png";
import ReactPlayer from "react-player";
import ReactLogo from "./logo.svg";
import JSLogo from "./assets/JavaScript-logo.png";
import TSLogo from "./assets/typescriptlogo.png";
import QuizGame from "./assets/quizgame.png";

export default function ProjectPage() {
  return (
    <div className="  grid grid-rows-20 grid-cols-2  mb-24  bg-gradient-to-l from-indigo-950 to-blue-950 md:grid  md:grid-rows-20 md:grid-cols-1  ">
      <div className="bg-blue-950 row-start-1 row-end-8 col-span-2 space-x-10 items-center justify-center flex   py-4  md:row-start-1 md:row-end-5 md:col-span-1 md:bg-blue-950 ">
        <Banner />
      </div>
      <div className="w-full max-w-screen-lg col-span-2 row-start-8 row-end-20 md:w-full md:row-start-8 md:row-end-20 md:col-span-1 md:mx-auto  md:justify-center ">
        <div className="col-span-5 row-start-5 row-end-12 w-full min-h-min items-center flex flex-col justify-between md:items-center md:w-full md:col-span-1 md:row-start-5 md:row-end-12  ">
          <h1 className="text-3xl text-white font-bold flex font-sans shadow-md px-8 py-1 md:text-3xl  md:text-white md:font-bold md:flex md:font-sans md:shadow-md md:px-8 md:py-1 ">
            Projects
          </h1>
          <h2 className="text-xl text-center text-white font-bold flex font-sans shadow-md px-8 py-1 md:text-xl md:text-center md:text-white md:font-bold md:flex md:font-sans md:shadow-md md:px-8 md:py-1">
            (Any websites will take a few minutes to load)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-5 md:mt-5 justify-items-center">
            <div className="pt-2 md:pt-2">
              <div className="flex items-center justify-center md:flex md:items-center md:justify-center">
                <h2 className="pb-2 ml-8  text-xl font-semibold text-white text-center md:pb-2 md:ml-8  md:text-xl md:font-semibold md:text-white md:text-center">
                  HG News App
                </h2>
                <div className="flex md:flex">
                  <img
                    src={ReactLogo}
                    className="w-24 pb-1 md:w-24 md:pb-1"
                    alt="React logo"
                  />
                  <img
                    src={JSLogo}
                    className="w-14 h-14 mt-2 md:w-14 md:h-14 md:mt-2"
                    alt="JavaScript logo"
                  />
                </div>
              </div>
              <img className="h-48 md:h-48  " src={HGNews} />
              <div className="flex space-x-4 mt-2 items-center justify-center md:flex md:space-x-4 md:mt-2 md:items-center md:justify-center">
                <a href="https://github.com/davidhcodes/nc-news-app">
                  <img className="w-36 md:w-36" src={Github} />
                </a>
                <a href="https://hg-news.netlify.app/">
                  <button className="bg-gradient-to-l from-blue-800 to-blue-700 rounded-xl shadow-lg w-36 h-16 md:bg-gradient-to-l md:from-blue-800 md:to-blue-700 md:rounded-xl md:shadow-lg md:w-36 md:h-16 ">
                    <h2 className="text-white text-2xl md:text-white md:text-2xl">
                      Website
                    </h2>
                  </button>
                </a>
              </div>
              <p className="text-white p-2 md:text-white md:p-2">
                An interactive news website, allowing users to read, comment and
                vote on news articles.
              </p>
            </div>

            <div className="items-center justify-center md:items-center md:justify-center">
              <div className="flex items-center justify-center md:flex md:items-center md:justify-center">
                <h2 className="pb-2 ml-8 text-xl font-semibold text-white text-center md:pb-2 md:ml-8 md:text-xl md:font-semibold md:text-white md:text-center">
                  Popcorner App
                </h2>
                <div className="flex md:flex">
                  <div className="flex-col md:flex-col">
                    <img
                      src={ReactLogo}
                      className="w-24 md:w-24"
                      alt="React logo"
                    />
                    <h3 className="text-react-native-blue text-xxs text-center justify-center items-center md:text-react-native-blue  md:text-xxs  md:text-center  md:ustify-center  md:items-center">
                      React Native
                    </h3>
                  </div>

                  <img
                    src={JSLogo}
                    className="w-14 h-14 mt-2 md:w-14 md:h-14 md:mt-2"
                    alt="JavaScript logo"
                  />
                </div>
              </div>
              <div className="player-wrapper ">
                <ReactPlayer
                  className="react-player "
                  url={PopcornerVideo}
                  light={PopcornerPoster}
                  width="325px"
                  height="190px"
                  controls={true}
                />
              </div>
              <div className="flex space-x-4 mt-2 items-center justify-center md:flex md:space-x-4 md:mt-2 md:items-center md:justify-center">
                <a href="https://github.com/davidhcodes/front-end-popcorner/">
                  <img className="w-36" src={GithubF} />
                </a>
                <a href="https://github.com/davidhcodes/popcorner-be">
                  <img className="w-36" src={GithubB} />
                </a>
              </div>
              <div className="">
                <p className="text-white p-2 -center md:text-white  md:p-2 md:-center">
                  PopCorner is an app created to connect movie enthusiasts in a
                  community-based app, users can securely create a profile or
                  log-in, register interests, create and join communities and
                  events and use Real-Time group chats to communicate with
                  fellow film enthusiasts.
                </p>
              </div>
            </div>
            <div className="pt-2 md:pt-2">
              <div className="flex items-center justify-center md:flex md:items-center md:justify-center">
                <h2 className="pb-2 ml-8  text-xl font-semibold text-white text-center md:pb-2 md:ml-8  md:text-xl md:font-semibold md:text-white md:text-center">
                  Weather App
                </h2>
                <div className="flex md:flex">
                  <img
                    src={ReactLogo}
                    className="w-24 pb-1 md:w-24 md:pb-1"
                    alt="React logo"
                  />
                  <img
                    src={JSLogo}
                    className="w-14 h-14 mt-2 md:w-14 md:h-14 md:mt-2"
                    alt="JavaScript logo"
                  />
                </div>
              </div>
              <img className="h-48 md:h-48 " src={WeatherApp} />
              <div className="flex space-x-4 mt-2 items-center justify-center md:flex md:space-x-4 md:mt-2 md:items-center md:justify-center">
                <a href="https://github.com/davidhcodes/WeatherApp">
                  <img className="w-36 md:w-36" src={Github} />
                </a>
                <a href="https://davidhcodesweather.netlify.app/">
                  <button className="bg-gradient-to-l from-blue-800 to-blue-700 rounded-xl shadow-lg w-36 h-16  md:bg-gradient-to-l  md:from-blue-800  md:to-blue-700  md:rounded-xl  md:shadow-lg  md:w-36  md:h-16 ">
                    <h2 className="text-white text-2xl md:text-white md:text-2xl">
                      Website
                    </h2>
                  </button>
                </a>
              </div>
              <p className="text-white p-2 md:text-white md:p-2">
                An interactive weather app that displays the current weather and
                5 day weather forecast for any city the user enters.
              </p>
            </div>
            <div className="pt-2 md:pt-2">
              <div className="flex items-center justify-center md:flex md:items-center md:justify-center">
                <h2 className="pb-2   text-xl font-semibold text-white text-center md:pb-2   md:text-xl md:font-semibold md:text-white md:text-center">
                  Interactive Quiz
                </h2>
                <div className="flex md:flex">
                  <img
                    src={ReactLogo}
                    className="w-24 pb-1 md:w-24 md:pb-1"
                    alt="React logo"
                  />
                  <img
                    src={TSLogo}
                    className="w-14 h-14 mt-2 md:w-14 md:h-14 md:mt-2"
                    alt="TypeScript logo"
                  />
                </div>
              </div>
              <h2 className="pb-2  bg-black my-2 text-sm font-semibold text-white text-center md:pb-2  md:bg-black md:my-2 md:text-sm md:font-semibold md:text-white md:text-center">
                Still in progress
              </h2>
              <img className="h-48  md:h-48" src={QuizGame} />
              <div className="flex space-x-4 mt-2 items-center justify-center md:flex md:space-x-4 md:mt-2 md:items-center md:justify-center">
                <a href="https://github.com/davidhcodes/QuizzApp">
                  <img className="w-36 md:w-36" src={Github} />
                </a>
                {/* <a href="https://davidhcodesweather.netlify.app/">
                  <button className="bg-gradient-to-l from-blue-800 to-blue-700 rounded-xl shadow-lg w-36 h-16 ">
                    <h2 className="text-white text-2xl"> Website </h2>
                  </button>
                </a> */}
              </div>
              <p className="text-white p-2 md:text-white md:p-2">
                An interactive quiz with multiple choice answers, it displays
                the user's results at the end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
