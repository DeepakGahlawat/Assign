import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Card from './components/card/Card';
import Detail from './Pages/Detail';


function App() {
  return (
    <div className="container">
      
      <Router>
      
      <Routes>
      <Route path="/" element={<Home />} />
        
        <Route path="/episodes" element={<Episodes />} />
        
        <Route path="/location" element={<Location />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
        <Route path="/character/:id" element={<Detail />} />
       
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
