import React from 'react';
import { Outlet } from 'react-router-dom';
import DocsumoLogo from '../DocsumoLogo';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className='docsumo-login-container'>
        <div className='login-container'>
            <DocsumoLogo />
            <div className='login-outlet'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default LoginPage;
