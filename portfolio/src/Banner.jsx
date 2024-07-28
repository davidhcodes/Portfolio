import { Link } from "react-router-dom";
export function Banner() {
  return (
    <>
      <Link className="link" to={`/`}>
        <button>
          <h1 className="text-white font-semibold text-2xl">Home</h1>
        </button>
      </Link>
      <Link className="link" to={`/AboutMe`}>
        <button>
          <h1 className="text-white font-semibold text-2xl">About</h1>
        </button>
      </Link>
      <Link className="link" to={`/ProjectPage`}>
        <button>
          <h1 className="text-white font-semibold text-2xl">Projects</h1>
        </button>
      </Link>
    </>
  );
}
