import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
  const currentUser  = localStorage.getItem("user");
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}