import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      localStorage.setItem('token', data.token )
      localStorage.setItem('user' , data)
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
      <h1 className='heading'>Welcome!! </h1>
        <input
          type='email'
          placeholder='email'
          className='input'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='input'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='button'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <div className='link-container'>
        <p>Do not have an account?</p>
        <Link to={'/sign-Up'} className='link'>
          Sign Up
        </Link>
      </div>
      </form>
     
      {error && <p className='error'>{error}</p>}
    </div>
  );
}
