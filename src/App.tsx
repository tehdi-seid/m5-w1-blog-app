import { Link, Outlet, Route, Routes, createBrowserRouter } from "react-router";
import SiteLayout from "./routes/SiteLayout";
import Posts from "./routes/Posts";
import HomePage from "./routes/HomePage";
import PostsDetail from "./routes/PostsDetail";
import AboutPage from "./routes/AboutPage";
import NotFound from "./routes/NotFound";
// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
  },
]);

function Home() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<PostsDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Home;
