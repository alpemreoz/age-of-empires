
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Unit from './pages/unitFilter';
import UnitDetail from './pages/unitDetail';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/units' exact element={<Unit/>}/>
          <Route path='/unitsDetail' exact element={<UnitDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
