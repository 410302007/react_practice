// import Main from './0118/1.lifecycle/Main';
// import ReactBS5 from './0118/4.react-bs/ReactBS5';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//引入頁面元件
import Home from './pages/Home';
import Member from './pages/Member';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <h2>a連結</h2>
      <a href="/">home</a> <a href="member">member</a>
      <hr />
      <h2>Link元件</h2>
      <Link to="/">home</Link> <Link to="member">member</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="member" element={<Member />} />
        {/*404找不到網頁用的頁面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
