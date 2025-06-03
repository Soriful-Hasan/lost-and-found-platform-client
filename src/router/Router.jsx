import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../layout/Home";
import SignUp from "../authentication/SignUp";
import SignIn from "../authentication/SignIn";
import Page from "../page/Page";
import PrivateRoute from "../private/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/page",
        element: (
          <PrivateRoute>
            <Page></Page>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error khaisos beta </h1>,
  },
]);
