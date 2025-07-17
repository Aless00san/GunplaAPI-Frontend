import { useState, useEffect } from "react";
import { Navbar } from "./Navbar.jsx";
import { GunplaFromDTO } from "../Model/GunplaDTO.js";
import { create, deleteGunpla, update } from "../services/GunplaService.js";
import { GunplaForm } from "./GunplaForm.jsx";
import { GunplaList } from "./GunplaList.jsx";
import { getRoles, isAuthenticated } from "../services/AuthService.js";
import usePagination from "../hooks/usePagination.js";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);
  const [selectedGunpla, setSelectedGunpla] = useState(null);

  // Data for pagination custom hook
  const {
    data: entries,
    currentPage,
    totalPages,
    totalElements,
    loading,
    error,
    nextPage,
    prevPage,
    firstPage,
    hasNext,
    hasPrev,
    refresh,
  } = usePagination(3);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles(username);
        setRoles(response.data.map((r) => r.name));
      } catch (err) {
        console.log(err);
      } finally {
        console.log("roles", roles);
      }
    };

    if (isLogged) {
      fetchRoles();
    }
  }, [isLogged, username]);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await isAuthenticated();
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

  const handleAddGunpla = async (gunpla) => {
    if (gunpla.id != 0) {
      // Update existing gunpla
      try {
        const convertedGunpla = await GunplaFromDTO(gunpla);
        await update(gunpla.id, convertedGunpla);
        refresh();
      } catch (error) {
        console.error("Error updating gunpla:", error);
      }
    } else {
      // Create new gunpla
      try {
        const convertedGunpla = await GunplaFromDTO(gunpla);
        const response = await create(convertedGunpla);
        refresh();
      } catch (error) {
        console.error("Error creating gunpla:", error);
      }
    }
  };

  const handleDeleteGunpla = async (gunpla) => {
    await deleteGunpla(gunpla.id);
    firstPage();
    refresh();
  };

  const handleSelectGunpla = (gunpla) => {
    setSelectedGunpla(gunpla);
  };

  const hasRole = (role) => {
    if (roles == undefined) {
      return false;
    }
    return roles.includes(role);
  };

  return (
    <>
      <Navbar
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setUsername={setUsername}
      />
      <div id="root" className="content">
        <p className="title">GunplaDB</p>

        {isLogged ? (
          <div>
            {roles == undefined ? (
              <p>Cargando roles...</p>
            ) : (
              <div>
                {roles.map((role) => (
                  <span key={role} className={`role-tag ${role}`}>
                    {role + " "}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p>Por favor inicia sesión para acceder a las funcionalidades</p>
        )}

        <GunplaForm
          handleAddGunpla={handleAddGunpla}
          selectedGunpla={selectedGunpla}
          isLogged={isLogged}
        />

        {loading && <p>Cargando gunplas...</p>}
        {error && <p className="message is-danger">Error al cargar gunplas: {error}</p>}

        <GunplaList
          entries={entries}
          handleDelete={handleDeleteGunpla}
          handleSelect={handleSelectGunpla}
          isLogged={isLogged}
          hasRole={hasRole}
        />

        {/* Pagination controls TODO: Separate component*/}
        {totalPages > 1 && (
          <div className="pagination-controls has-text-centered">
            <div className="columns is-centered">
              <div className="column">
                <button onClick={prevPage} disabled={!hasPrev}>
                  Anterior
                </button>
              </div>
              <div className="column">
                <span>
                  Página {currentPage + 1} de {totalPages}
                </span>
              </div>
              <div className="column ">
                <button onClick={nextPage} disabled={!hasNext}>
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
