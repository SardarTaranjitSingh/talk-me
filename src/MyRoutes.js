import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import ChatBot from "./pages/ChatBot";
import Home from "./pages/Home";
import { MyContext } from "./provider/myContext";


const MyRoutes = () => {
  const { myState, actionToCheckUserToken } = useContext(MyContext)

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const tokenFromUrl = url.searchParams.get('token');

    if (tokenFromUrl) {
      actionToCheckUserToken(tokenFromUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const router = createBrowserRouter([
    {
      path: "/chat-widget",
      element: myState.token_valid ? <ChatBot /> : <Home />,
    },
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default MyRoutes