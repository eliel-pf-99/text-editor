import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditorApp from "../editor/pages/editor_app";
import { useAuth } from "../provider/auth_provider"
import { ProtectedRoute } from "./protect";
import Login from "../editor/pages/login";
import Signup from "../editor/pages/signup";
import Home from "../editor/pages/home";
import Index from "../editor/pages";
import Mobile from "../editor/pages/mobile";
import NotFound from "../editor/pages/404";

export const Routes = () => {
  const {token} = useAuth();

  const routeForMobile = [
    {
      path: "/",
      element: <Mobile />
    }
  ]

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/editor",
      element: <EditorApp />
      },
    ]
  }
  ]

  const routesForNotAuthenticate = [
    {
      path: "/",
      element: <Index />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
  ]

  const routeNotFound = [{
    path: '*',
    element: <NotFound />
  }]
  //check if is a mobile
  let router = createBrowserRouter([
    ...routeForMobile,
    ...routeNotFound,
  ]);
  if(!/Mobi|Android|iPhone/i.test(navigator.userAgent)){
    router = createBrowserRouter([
      ...(!token ? routesForNotAuthenticate : []),
      ...routesForAuthenticatedOnly,
      ...routeNotFound,
    ]);
  }
  
  return <RouterProvider router={router} />
}