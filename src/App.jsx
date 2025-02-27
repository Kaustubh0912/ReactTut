import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Navbar/Navbar';
import Home from './screens/Home/Home';
import Dashboard from './screens/Dashboard/Dashboard';
import Settings from './screens/Settings/Settings';
import Profile from './screens/Profile/Profile';

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
