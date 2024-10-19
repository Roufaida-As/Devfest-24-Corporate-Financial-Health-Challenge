import logo from '../assets/MoneyScopeLogoFinalPng.png'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='Header-ctn'>
        <div className='header-div1'>
            <img  src={logo} alt="logo" />
            <Link className='btn-blue' to="/">Home</Link>
            <Link className='btn-blue'  to="/habits">Habits</Link>
        </div>
        <div>
            <Link className='btn-white'  to="/sign-in">Sign In</Link>
            <Link className='btn-blue'  to="/sign-up">Sign Up</Link>
        </div>
    </div>
  )
}
