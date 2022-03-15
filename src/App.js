import { Route, Routes } from 'react-router-dom'
import MainHeader from './components/MainHeader';
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
          <Route path='/' element={<p>Hello Woooorld!</p>} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domani.com/ => Component A
// our-domain.com/product => Component B


// our-domani.com/ => Component A
// our-domain.com/product => Component B


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