import { Route, Routes } from 'react-router-dom';
import { authRoutes, routes } from '../../routes';
import { Login } from '../../pages';
import MainLayout from '../Layout';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = () => (
  <Routes>
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
  </Routes>
);

export default AppRouter;
