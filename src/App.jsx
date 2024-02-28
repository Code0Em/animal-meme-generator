//===========
//  Imports 
//===========
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CatGen from './components/Generator/CatGen';
import DogGen from './components/Generator/DogGen';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {

  return (
    <Router>
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
