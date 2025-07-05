import { useState } from "react";
import axios from "axios";
// import '../App.css'
import { GunplaList } from "./GunplaList.jsx";
import { mockEntry, fetchedList } from "../services/GunplaService.js";
import { useEffect } from "react";
import { GunplaForm } from "./GunplaForm.jsx";

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedGunpla, setSelectedGunpla] = useState(mockEntry);

  useEffect(() => {
    axios.get("http://localhost:8080/api/gunpla/list").then((response) => {
      setEntries(response.data);
    });
  }, []);

  const handleAddGunpla = (gunpla) => {
    console.log("Gunpla:", gunpla);
    if (gunpla.id != 0) {
      setEntries(
        entries.map((g) => {
          if (g.id === gunpla.id) {
            return { ...gunpla };
          }
          return g;
        })
      );
    } else {
      setEntries([...entries, { ...gunpla, id: new Date().getTime() }]);
    }
  };

  const handleDeleteGunpla = (gunpla) => {
    setEntries(
      entries.filter((g) => {
        return g.id !== gunpla.id;
      })
    );
  };

  const handleSelectGunpla = (gunpla) => {
    console.log("Gunpla:", gunpla);
    setSelectedGunpla(gunpla);
  };

  return (
    <>
      <p className="title">GunplaDB</p>
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
