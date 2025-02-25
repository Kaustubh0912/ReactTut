import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './screens/components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Dashboard from './screens/Dashboard/Dashboard'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
