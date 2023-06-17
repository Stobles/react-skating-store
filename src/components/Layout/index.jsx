import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Bar from './Bar';
import Footer from './Footer';
import Menu from './Menu';
import Message from './Header/Message';

const MainLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className='wrapper'>
      <ScrollRestoration />
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
