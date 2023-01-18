// import Main from './0118/1.lifecycle/Main';
// import ReactBS5 from './0118/4.react-bs/ReactBS5';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

//引入頁面元件
import Home from './pages/Home';
import Member from './pages/Member';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout中有Header, Footer與Outlet等元件，整體排版用 */}
        <Route path="/" element={<MainLayout />}>
          {/* index代表此路由中的預設子頁 */}
          <Route index element={<Home />} />
          {/* 其它子頁面 */}
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="member" element={<Member />} />
          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
