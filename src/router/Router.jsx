import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../layout/Home";
import SignUp from "../authentication/SignUp";
import SignIn from "../authentication/SignIn";
import PrivateRoute from "../private/PrivateRoute";
import AddItem from "../page/addPost/AddItem";
import ItemDetails from "../page/items/Itemdetails";
import MyPost from "../page/myPost/MyPost";
import AllPosts from "../page/allItems/AllItems";
import EditPost from "../page/myPost/EditPost";
import RecoveredItems from "../page/recoverdItem/RecoveredItems";
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
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      //verify done jwt token
      {
        path: "/itemDetails/:id",
        element: (
          <PrivateRoute>
            <ItemDetails></ItemDetails>
          </PrivateRoute>
        ),
      },
      //verify done jwt token
      {
        path: "/myPost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/editPost/:id",
        element: (
          <PrivateRoute>
            <EditPost></EditPost>
          </PrivateRoute>
        ),
      },
      //verify done jwt token
      {
        path: "/recoveredItems",
        element: (
          <PrivateRoute>
            <RecoveredItems></RecoveredItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/allPosts",
        Component: AllPosts,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error khaisos beta </h1>,
  },
]);
