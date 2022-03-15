import { Route, Routes, Navigate } from 'react-router-dom'
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route path='/' exact element={<Navigate to='/welcome' />} />
          <Route path='/welcome/*' element={<Welcome />} />
          <Route path='/products' element={<Products />} exact />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domani.com/ => Component A
// our-domain.com/product => Component B
// our-domain.com/product-details/a-book => Component C


// Versão Antiga da Lib:

// function App() {
//   return (
//     <div>
//       <Route path='/welcome'>
//         <Welcome />
//       </Route>
//       <Route path='/products'>
//         <Products />
//       </Route>
//     </div>
//   );
// }