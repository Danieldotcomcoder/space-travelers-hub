import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Rocket from './Components/RocketPage';
import Mission from './Components/MissionPage';
import MyProfile from './Components/MyProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Rocket</Link>
              </li>
              <li>
                <Link to="/Mission">Mission</Link>
              </li>
              <li>
                <Link to="/MyProfile"> My Profile</Link>
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
