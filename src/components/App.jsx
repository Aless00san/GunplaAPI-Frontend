import { useState } from 'react';
// import '../App.css'
import { GunplaList } from './GunplaList.jsx';
import { mockEntry, gunplaList, create } from '../services/GunplaService.js';
import { useEffect } from 'react';
import { GunplaForm } from './GunplaForm.jsx';
import { GunplaFromDTO } from '../Model/GunplaDTO.js';

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedGunpla, setSelectedGunpla] = useState(mockEntry);

  useEffect(() => {
    gunplaList().then(response => {
      setEntries(response.data);
    });
  }, []);

  const handleAddGunpla = async gunpla => {
    console.log('Gunpla:', gunpla);
    if (gunpla.id != 0) {
      setEntries(
        entries.map(g => {
          if (g.id === gunpla.id) {
            return { ...gunpla };
          }
          return g;
        })
      );
    } else {
      GunplaFromDTO(gunpla).then(async g => {
        console.log('Gunpla FROM DTO  ', g);
        const response = await create(g);
        setEntries([...entries, { ...response.data }]);
      });

      // const response = await create(gunpla);
      // setEntries([...entries, { ...response.data }]);
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
    console.log('Gunpla:', gunpla);
    setSelectedGunpla(gunpla);
  };

  return (
    <>
      <p className='title'>GunplaDB</p>
      <GunplaForm
        handleAddGunpla={handleAddGunpla}
        selectedGunpla={selectedGunpla}
      />
      <GunplaList
        entries={entries}
        handleDelete={handleDeleteGunpla}
        handleSelect={handleSelectGunpla}
      ></GunplaList>
    </>
  );
}

export default App;
