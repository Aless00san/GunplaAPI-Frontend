import {
  login,
  logout,
  isAuthenticated,
  getRoles,
} from '../services/AuthService.js';
import { useState, useEffect } from 'react';
import './../style/gunpladb.css';
import { LoginModal } from './LoginModal.jsx';
import { RegisterModal } from './RegisterModal.jsx';

export const Navbar = ({ isLogged, setIsLogged, setUsername, setIsAuth }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegister = ({ username, password, email }) => {
    console.log('registered', username, password, email);
  };

  const handleLogin = ({ username, password }) => {
    login(username, password).then(response => {
      if (response.data.token) {
        setUsername(username);
        setIsLogged(true);
        setShowLoginModal(false);
      }
    });
  };

  const handleLogout = () => {
    logout().then(response => {
      if (response.status === 200) {
        setIsLogged(false);
      } else {
        console.log('Error in logout');
      }
    });
  };

  return (
    <>
      {showLoginModal && (
        <LoginModal
          showModal={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          handleLogin={handleLogin}
          setIsAuth={setIsAuth}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          showModal={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
          handleRegister={handleRegister}
        />
      )}
      <nav
        className='navbar nav mb-5'
        role='navigation'
        aria-label='main navigation'
      >
        <div
          id='basic-navbar'
          className='navbar-menu'
        >
          <div className='navbar-start'>
            <a className='navbar-item'>Home</a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              {isLogged ? (
                <button
                  className='button clickable has-background-danger-light'
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              ) : (
                <div className='buttons'>
                  <a>
                    <button
                      className='button is-primary clickable'
                      onClick={() => setShowRegisterModal(true)}
                    >
                      Registrarse
                    </button>
                  </a>
                  <a>
                    <button
                      className='button is-light clickable'
                      onClick={() => setShowLoginModal(true)}
                    >
                      Login
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
