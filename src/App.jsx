// imports 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Generator from './components/Generators/Generator';
import Footer from './components/Footer/Footer';
import './App.css'
import { useState } from "react";

const App = () => {

  const [newClass, setNewClass] = useState("");

  const chooseClass = (val) => {
    setNewClass(val);
  };


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home chooseClass={chooseClass} />} />
        <Route path="Generator" element={<Generator newClass={newClass} />} />
      </Routes>
      
      <Footer />
    </Router >
  )
}

// exports
export default App;
