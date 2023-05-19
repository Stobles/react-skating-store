import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from './Header/Message';
import Header from './Header';
import Bar from './Bar';
import Footer from './Footer';
import Loader from '../UI/Loader';

const MainLayout = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='wrapper'>
      {!user && <Message />}
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Bar />
      <Footer />
    </div>
  );
};
export default MainLayout;
