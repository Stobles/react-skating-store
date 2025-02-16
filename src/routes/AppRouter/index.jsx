import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "@comp/Layout";
import UserLayout from "@comp/Layout/UserLayout";
import { authRoutes, routes, userLayoutRoutes } from "../routes";
import { Login, User } from "../../pages";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={process.env.VITE_BASENAME}>
      <Route path="/auth" element={<Login />} end />
      <Route element={<MainLayout />}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} end />
        ))}
        <Route element={<PrivateRoutes />}>
          {authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} end />
          ))}
        </Route>
        <Route element={<UserLayout />}>
          {userLayoutRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} end />
          ))}
        </Route>
      </Route>
    </Route>
  )
);

export default AppRouter;
