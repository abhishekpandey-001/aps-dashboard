import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";

import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/scan",
    element: <ScanDetail />, // or whatever your main scans page is
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/scan/:id",
    element: <ScanDetail />,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <Toaster position="top-right"/>
    </>
  )
}

export default App;