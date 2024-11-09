import React from 'react';
import LoginForm from './Login';

const Login = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
    }}>
      <LoginForm />
    </div>
  );
};

export default Login;