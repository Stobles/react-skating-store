import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Message from './Header/Message';
import Header from './Header';
import Bar from './Bar';
import Footer from './Footer';
import Menu from './Menu';

const MainLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className='wrapper'>
      {!user && <Message />}
      <Header setIsMenuActive={setIsMenuActive} />
      <Menu
        setIsMenuActive={setIsMenuActive}
        isMenuActive={isMenuActive}
        title='Меню'
      />
      <main className='main'>
        <Outlet />
      </main>
      <Bar />
      <Footer />
    </div>
  );
};
export default MainLayout;
