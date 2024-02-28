//===========
//  Imports 
//===========
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import CatGen from './components/Generators/CatGen';
import DogGen from './components/Generators/DogGen';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="CatGen" element={<CatGen />} />
        <Route path="DogGen" element={<DogGen />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App;
