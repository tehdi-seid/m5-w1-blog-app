import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
  type LoaderFunctionArgs,
} from "react-router";
import SiteLayout from "./routes/SiteLayout.tsx";
import Posts from "./routes/Posts.tsx";
import AboutPage from "./routes/AboutPage.tsx";
import PostsDetail from "./routes/PostsDetail.tsx";
import HomePage from "./routes/HomePage.tsx";

// function loaderFunction({ params }: LoaderFunctionArgs) {
//   const posts = findPosts(params.slug!);
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/posts/:slug",
        element: <PostsDetail />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
