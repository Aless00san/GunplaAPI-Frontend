import { useState, useEffect } from 'react';

const userData = {
  username: '',
  email: '',
  password: '',
};

export const RegisterModal = ({ showModal, onClose, handleRegister }) => {
  const [register, setRegister] = useState(userData);
  const [isActive, setIsActive] = useState(showModal);

  useEffect(() => {
    setIsActive(showModal);
  }, [showModal]);

  const handleClose = () => {
    onClose();
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
              <h1 className='title'>Registro</h1>
              <form>
                <div className='field'>
                  <label className='label'>Usuario</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Usuario'
                      onChange={e =>
                        setRegister({ ...register, username: e.target.value })
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
                        setRegister({ ...register, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Email</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='email'
                      placeholder='Email'
                      onChange={e =>
                        setRegister({ ...register, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </form>
              <div className='buttons is-justify-content-center'>
                <button
                  className='button is-primary mt-3 clickable'
                  onClick={() => {
                    handleRegister({ ...register });
                    handleClose();
                  }}
                >
                  Registrarse
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
