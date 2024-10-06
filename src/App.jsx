import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage'
import Products from './pages/Products';
import Footer from './components/Footer/Footer';
import Categories from './pages/CategoriesPage/Categories';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/category/:categoryName' element={<Categories/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
