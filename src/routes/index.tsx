import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Dashboard } from "@/pages/user_Dahsboard/Dashboard/Dashboard"; // Added by Atikur
import Analytics from "@/pages/admin/Analytics";
import Contact from "@/pages/Contact";
// import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify"; 
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Contact,
        path: "contact",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        Component: Analytics,
        path: "analytics",
      },
    ],
  },
  // Added By Atik For user Dashboard
    {
    Component: Dashboard, 
    path: "/dashboard",
  },

  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);