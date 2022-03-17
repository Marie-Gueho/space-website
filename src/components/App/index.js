// == Import
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Navbar from '../Navbar';
import Home from '../Home';
import Destination from '../Destination';
import Crew from '../Crew';
import Technology from '../Technology';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="destination/*" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </div>
);

// == Export
export default App;
