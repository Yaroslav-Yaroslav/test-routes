import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { ProductDetails } from 'pages/ProductDetails ';
import { Products } from 'pages/Products';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
