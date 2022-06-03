import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import './assets/fontawesome/css/all.min.css';
import Home from "./views/Home";
import Tokenomics from "./views/Tokenomics";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (

    <Router>


    <Routes>
 
      
      <Route path="/" element={<Home/>} />
      <Route path="/tokenomics" element={<Tokenomics/>} />


    </Routes>
    
  </Router>

    
  );
}

export default App;
