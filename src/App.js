import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import Rocket from './Components/RocketPage';
import Mission from './Components/MissionPage';
import MyProfile from './Components/MyProfile';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <div className="logo">
              <img className="logo-img" src={logo} alt="logo" />
              <h1>Space Travelers&apos; Hub</h1>
            </div>
            <ul className="nav-link">
              <li>
                <NavLink exact to="/">Rocket</NavLink>
              </li>
              <li>
                <NavLink to="/Mission">Mission</NavLink>
              </li>
              <li>
                <NavLink to="/MyProfile"> My Profile</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Rocket />} />
            <Route path="/Mission" element={<Mission />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
