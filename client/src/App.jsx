import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Habits from './pages/Habits';
import PrivateRoutes from './components/PrivateRoutes';
import Recommendation from './pages/Recommendation';


function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/habits' element={<Habits />} />
          <Route element={<PrivateRoutes />}>
          <Route path='/Recommendation' element={<Recommendation />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
