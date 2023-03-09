// import logo from './logo.svg';
import './App.css';
import AdminProducts from './pages/AdminProducts';
import Home from './pages/Home';
import FavouritesPage from './pages/FavouritesPage';
import ParentContext from './context/ParentContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/common/Layout';
import AdminUsers from './pages/AdminUsers';
import ProductPage from './pages/ProductPage';
import SaleNewPage from './pages/SaleNewPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <>
      <ParentContext>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favourites' element={<FavouritesPage />} />
              <Route path='/admin-products' element={<AdminProducts />} />
              <Route path='/admin-users' element={<AdminUsers />} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/sale-new' element={<SaleNewPage />} />
              <Route path='/category-page' element={<CategoryPage />} />
            </Routes>
          </Layout>
        </Router>
      </ParentContext>
    </>
  );
}

export default App;
