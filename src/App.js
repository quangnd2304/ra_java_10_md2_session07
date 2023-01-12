import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Abouts from './components/Abouts';
import Products from './components/Products';
import RikkeiSoft from './components/RikkeiSoft';
import RikkeiAcademy from './components/RikkeiAcademy';
import AboutIndex from './components/AboutIndex';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import Login from './components/Login';
import CourseDetail from './components/CourseDetail';
import React from 'react';

const ProductLazy = React.lazy(() => import('./components/Products'));


function App() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    backgroundColor: isActive ? 'black' : 'red'
  })
  return (
    <div className="App">
      {/* Xây dựng menu với Link, NavLink */}
      <nav>
        <ul>
          <li><NavLink to={'/'} style={navLinkStyle}>Home</NavLink></li>
          <li>
            <NavLink to={'/abouts'} style={navLinkStyle}>Abouts Us</NavLink>
            <ul>
              <li><Link to={'/abouts/rikkeisoft'}>About Rikkeisoft</Link></li>
              <li><Link to={'/abouts/rikkeiacademy'}>About RikkeiAcademy</Link></li>
            </ul>
          </li>
          <li><NavLink to={'/products'} style={navLinkStyle}>Product</NavLink></li>
        </ul>
      </nav>
      {/* Định nghĩa bộ định tuyến */}
      <Routes>
        {/* Định tuyến */}
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />}>
          {/* Nested Route */}
          {/* Index Route */}
          <Route index element={<AboutIndex />} />
          <Route path='rikkeisoft' element={<RikkeiSoft />} />
          <Route path='rikkeiacademy' element={<RikkeiAcademy />} />
        </Route>
        <Route path='/products' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductLazy />
          </React.Suspense>
        } />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='products/courseDetail/:courseName/:time' element={<CourseDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
