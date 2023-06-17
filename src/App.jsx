import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

const App = () => (
  <>
    <ToastContainer />
    <RouterProvider router={AppRouter} />
  </>
);

export default App;
