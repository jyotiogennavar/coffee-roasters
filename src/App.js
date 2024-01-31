import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import CreatePlan from "./pages/create-a-plan";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about-us",
    element: <AboutUs/>
  },
  {
    path: "create-a-plan",
    element: <CreatePlan/>
  }
]);

function App() {
  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App;
