import App from "@/App"; 
import DashboardLayout from "@/components/layout/DashboardLayout"; 
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import booking from "@/pages/User/booking";
import Verify from "@/pages/Verify"; 
import { generateRoutes } from "@/utils/generarateRoutes";
import { createBrowserRouter } from "react-router" 
import { adminSidebarItems } from "./adminSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      }, 
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children:[...generateRoutes(adminSidebarItems)]
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
     { 
        Component: booking,
        path: "booking",
      
      }
    ]
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