import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Services from './Components/Sevices/Services';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Login />} />
          <Route path="services" element={<Services />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
