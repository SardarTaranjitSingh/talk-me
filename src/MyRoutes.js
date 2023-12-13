import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ChatBot from "./pages/ChatBot";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/chat-widget",
    element: <ChatBot />,
  },
  {
    path: "/",
    element: <Home />,
  }
]);


const MyRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default MyRoutes