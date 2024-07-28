import { Banner } from "./Banner";
import HGNews from "./assets/hgnewsapp.png";
import Github from "./assets/githublinklogo.png";
import GithubF from "./assets/githubfrontend.png";
import GithubB from "./assets/githubbackend.png";
import PopcornerVideo from "./assets/videos/PopcornerMP4Video.mp4";
import PopcornerPoster from "./assets/PopcornerPoster.png";
import ReactPlayer from "react-player";

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-l from-indigo-950 to-blue-950">
      <div className="col-span-5 row-start-1 row-end-5 w-full bg-blue-950 flex justify-center space-x-20 py-5">
        <Banner />
      </div>
      <div className="w-full max-w-screen-lg m-auto grid grid-rows-20 grid-cols-2 gap-2 mb-24 md:grid-rows-20 md:grid-cols-5">
        <div className="col-span-5 row-start-5 row-end-12 w-full min-h-min flex flex-col justify-between items-center">
          <h1 className="text-3xl text-white font-bold flex font-sans shadow-md px-8 py-1">
            Projects
          </h1>
          <h2 className="text-xl text-white font-bold flex font-sans shadow-md px-8 py-1">
            (Any websites will take a few minutes to load)
          </h2>
          <div className="grid grid-cols-3 grid-rows-5 gap-8 mt-5">
            <div className="">
              <h2 className="pb-2 text-xl font-semibold text-white text-center">
                HG News App
              </h2>
              <img className="h-48 " src={HGNews} />
              <div className="flex space-x-4 mt-2 items-center justify-center">
                <a href="https://github.com/davidhcodes/nc-news-app">
                  <img className="w-36" src={Github} />
                </a>
                <a href="https://hg-news.netlify.app/">
                  <button className="bg-gradient-to-l from-blue-800 to-blue-700 rounded-xl w-36 h-16 ">
                    <h2 className="text-white text-2xl"> Website </h2>
                  </button>
                </a>
              </div>
              <p className="text-white p-2">
                An interactive news website, allowing users to read, comment and
                vote on news articles.
              </p>
            </div>

            <div className="items-center justify-center">
              <h2 className="pb-2 ml-8 text-xl font-semibold text-white text-center">
                Popcorner App
              </h2>
              <div className="player-wrapper ">
                <ReactPlayer
                  className="react-player "
                  url={PopcornerVideo}
                  light={PopcornerPoster}
                  width="350px"
                  height="190px"
                  controls={true}
                />
              </div>
              <div className="flex space-x-4 mt-2 items-center justify-center">
                <a href="https://github.com/davidhcodes/front-end-popcorner/">
                  <img className="w-36" src={GithubF} />
                </a>
                <a href="https://github.com/davidhcodes/popcorner-be">
                  <img className="w-36" src={GithubB} />
                </a>
              </div>
              <div className="">
                <p className="text-white p-2 -center">
                  PopCorner is an app created to connect movie enthusiasts in a
                  community-based app, users can securely create a profile or
                  log-in, register interests, create and join communities and
                  events and use Real-Time group chats to communicate with
                  fellow film enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
