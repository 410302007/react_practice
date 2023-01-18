import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <>
      <div class="col-lg-8 mx-auto p-4 py-md-5">
        <Header />
        <main>
          {/* 路由對應render出的畫面在這裡 
              例如Home, User...等頁面元件render的內容
          */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
