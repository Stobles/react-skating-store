import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '@comp/Layout';
import { authRoutes, routes } from '../routes';
import { Login } from '../../pages';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/auth' element={<Login />} end />
      <Route element={<MainLayout />}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} end />
        ))}
        <Route element={<PrivateRoutes />}>
          {authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} end />
          ))}
        </Route>
      </Route>
    </Route>,
  ),
);

export default AppRouter;
