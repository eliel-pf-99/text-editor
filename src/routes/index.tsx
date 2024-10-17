import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditorApp from "../editor/pages/editor_app";
import { useAuth } from "../provider/auth_provider"
import { ProtectedRoute } from "./protect";
import Login from "../editor/pages/login";
import Signup from "../editor/pages/signup";
import Home from "../editor/pages/home";

export const Routes = () => {
  const {token} = useAuth();

  const routesForPublic = [
    {
      path: '/service',
      element: <div>Service Page</div>
    },
    {
      path: '/about-us',
      element: <div>About Us</div>
    }
  ];

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
      {
        path: "/logout",
        element: <div>Logout</div>
      }
    ]
  }
  ]

  const routesForNotAuthenticate = [
    {
      path: "/",
      element: <div>Home Page</div>
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

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticate : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />
}