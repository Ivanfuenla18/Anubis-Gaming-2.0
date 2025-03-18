import React from 'react';
import './css/Header.css';

export const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
    window.location.reload();
  };

  return (
    <nav className='navbar'>
      <div className="nav-1">
        <a href=""><div className='nav-img-logo'></div></a>
        <a href=""><div className='nav-titulo'>Anubis</div></a>
      </div>
      <div className='nav-conf'>
        <div className="nav-img-lupa"></div>
        <a href="">
          <div className='nav-img-carrito'></div>
        </a>
        <a href="">
          <div className='nav-img-login'></div>
        </a>
      </div>
    </nav>
  );
};
