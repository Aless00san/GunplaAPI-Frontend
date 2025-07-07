import { login } from "../services/AuthService.js";
import { useState } from "react";
import "./../style/gunpladb.css";
import { LoginModal } from "./LoginModal.jsx";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (username, password) => {
    login(username, password).then((response) => {
      if (response.data.token) {
        setIsLogged(true);
        setShowModal(false);
      }
    });
  };

  return (
    <>
      {showModal && (
        <LoginModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          handleLogin={handleLogin}
        />
      )}
      <nav
        className="navbar nav mb-5"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="basic-navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {isLogged ? null : (
                <div className="buttons">
                  <a>
                    <button
                      className="button is-primary clickable"
                      onClick={handleLogin()}
                    >
                      Registrarse
                    </button>
                  </a>
                  <a>
                    <button
                      className="button is-light clickable"
                      onClick={() => setShowModal(true)}
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
