import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { AUTH_ROUTE, REGISTRATION_ROUTE, TODO_LIST_ROUTE } from "./utils/const";

export const authRoutes = [
    {
      path:TODO_LIST_ROUTE,
      Component: HomePage
    },
  ];
  export const publicRoutes = [
    {
      path: AUTH_ROUTE,
      Component: AuthPage
    },
    {
      path: REGISTRATION_ROUTE,
      Component: AuthPage
    },
    
  ];
  