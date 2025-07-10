import { useState } from 'react';
import { Navbar } from './Navbar.jsx';
// import '../App.css'
import { useEffect } from 'react';
import { GunplaFromDTO } from '../Model/GunplaDTO.js';
import { create, gunplaList, update } from '../services/GunplaService.js';
import { GunplaForm } from './GunplaForm.jsx';
import { GunplaList } from './GunplaList.jsx';

import { getRoles, isAuthenticated } from '../services/AuthService.js';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');
  const [entries, setEntries] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedGunpla, setSelectedGunpla] = useState(null);

  const fetchEntries = async () => {
    const response = await gunplaList();
    setEntries(response.data);
  };

  const fetchRoles = async () => {
    const response = await getRoles(username);
    setRoles(response.data.map(r => r.name));
  };

  useEffect(() => {
    fetchEntries();
  }, [isLogged]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles(username);
        setRoles(response.data.map(r => r.name));
      } catch (err) {
        console.log(err);
      } finally {
        console.log('roles', roles);
      }
    };
    if (username) {
      fetchRoles();
    }
  }, [isLogged]);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await isAuthenticated();
      console.log('auth', response);
      if (response != undefined) {
        setRoles(response.data.roles);
        if (response.status === 200) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      }
    };
    checkAuth();
  }, []);

  const handleAddGunpla = async gunpla => {
    if (gunpla.id != 0) {
      setEntries(
        entries.map(g => {
          if (g.id === gunpla.id) {
            GunplaFromDTO(gunpla).then(g => {
              update(gunpla.id, g);
            });
            return { ...gunpla };
          }
          return g;
        })
      );
    } else {
      GunplaFromDTO(gunpla).then(async g => {
        const response = await create(g);
        setEntries([...entries, { ...response.data }]);
      });
    }
  };

  const handleDeleteGunpla = gunpla => {
    setEntries(
      entries.filter(g => {
        return g.id !== gunpla.id;
      })
    );
  };

  const handleSelectGunpla = gunpla => {
    setSelectedGunpla(gunpla);
  };

  return (
    <>
      <Navbar
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setUsername={setUsername}
      />
      <div
        id='root'
        className='content'
      >
        <p className='title'>GunplaDB</p>
        {isLogged ? (
          <>Roles: {roles.join(', ')}</>
        ) : (
          <p>Por favor inicia sesión para acceder a las funcionalidades</p>
        )}
        <GunplaForm
          handleAddGunpla={handleAddGunpla}
          selectedGunpla={selectedGunpla}
          isLogged={isLogged}
        />
        <GunplaList
          entries={entries}
          handleDelete={handleDeleteGunpla}
          handleSelect={handleSelectGunpla}
          isLogged={isLogged}
        ></GunplaList>
      </div>
    </>
  );
}

export default App;
