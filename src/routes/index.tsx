import App from "@/App"; 
import Login from "@/pages/Login";
import Register from "@/pages/Register"; 
import { createBrowserRouter } from "react-router";
import { LoginForm } from "@/components/modules/Authentication/LoginForm";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        // Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
    Component: RegisterForm,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    // Component: Verify,
    path: "/verify",
  },
]);