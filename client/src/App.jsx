import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Habits from './pages/Habits';
import PrivateRoutes from './components/PrivateRoutes';
import Recommendation from './pages/Recommendation';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/habits' element={<Habits/>} />
        <Route element={<PrivateRoutes />}>
          <Route path='/Recommendation' element={<Recommendation />} />
          
        </Route>
      </Routes>
      </>
  );
}