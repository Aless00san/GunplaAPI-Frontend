import { useState, useEffect } from 'react';

const loginData = {
  username: '',
  password: '',
};

export const LoginModal = ({ showModal, onClose, handleLogin, setIsAuth }) => {
  const [login, setLogin] = useState(loginData);
  const [isActive, setIsActive] = useState(showModal);

  useEffect(() => {
    setIsActive(showModal);
  }, [showModal]);

  const handleClose = () => {
    onClose();
    setIsAuth(true);
  };

  return (
    <>
      {isActive && (
        <div className='modal is-active'>
          <div
            className='modal-background'
            onClick={handleClose}
          ></div>
          <div className='modal-content'>
            <div className='box'>
              <h1 className='title'>Login</h1>
              <form>
                <div className='field'>
                  <label className='label'>Usuario</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Usuario'
                      onChange={e =>
                        setLogin({ ...login, username: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Contraseña</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='password'
                      placeholder='Contraseña'
                      onChange={e =>
                        setLogin({ ...login, password: e.target.value })
                      }
                    />
                  </div>
                </div>
              </form>
              <div className='buttons is-justify-content-center'>
                <button
                  className='button is-primary mt-3 clickable'
                  onClick={() => {
                    handleLogin({ ...login });
                  }}
                >
                  Login
                </button>
                <button
                  onClick={handleClose}
                  className='modal-close is-large'
                  aria-label='close'
                ></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
