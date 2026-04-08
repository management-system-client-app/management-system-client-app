import App from "@/App";
import { createBrowserRouter } from "react-router";
import { LoginForm } from "@/components/modules/Authentication/LoginForm";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
  },
  {
    path: "/login",
    Component: LoginForm,
  },
  {
    path: "/register",
    Component: RegisterForm,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);