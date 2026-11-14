import { Link } from "react-router";
function Footer() {
  return (
    <footer className="bg-linear-0 to-transparnt from-gray-900 py-7 text-gray-300 before:content-['blog'] before:absolute relative before:inset-0 z-10 before:-z-10 before:text-[clamp(200px,30vw,400px)] before:flex before:justify-center before:items-center before:uppercase before:font-bold before:-bottom-30 before:text-gray-700 overflow-hidden">
      <div className="gap-2 pb-5 text-center">
        <div>
          <h2 className="text-5xl font-semibold bg-radial from-fuchsia-700 to-blue-600 w-max mx-auto bg-clip-text text-transparent">
            DevBlog
          </h2>
          <div>
            <h4 className="text-3xl capitalize">learn build grow</h4>
            <p>
              Your space for exploring web development, programming, and
              technology.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t px[5%] text-gray-300 px-[5%]">
        <div className="flex justify-between py-5">
          <h4 className="text-2xl font-semibold capitalize">quick link</h4>
          <ul className="flex text-lg gap-5">
            <Link className="hover:underline capitalize" to="/">
              home
            </Link>
            <Link className="hover:underline capitalize" to="/posts">
              posts
            </Link>
            <Link className="hover:underline capitalize" to="/about">
              about
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
