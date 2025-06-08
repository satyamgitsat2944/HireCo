import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { googleLogout } from '../store/slices/userSlice';

const GoogleSignout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignout = async () => {
    try {
      await dispatch(googleLogout()).unwrap();
      
      // Clear local Google token
      localStorage.removeItem('google_token');
      
      navigate('/login');
      toast.success("Signed out from Google successfully");
    } catch (error) {
      toast.error(error || "Google signout failed");
    }
  };

  return (
    <button 
      onClick={handleGoogleSignout}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#DB4437', // Google red
        color: 'white',
        cursor: 'pointer',
        margin: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <span>Sign Out from Google</span>
    </button>
  );
};

export default GoogleSignout;