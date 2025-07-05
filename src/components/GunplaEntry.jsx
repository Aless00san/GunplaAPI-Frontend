import { GunplaDTOFromEntry } from "../Model/GunplaDTO.js";

export const GunplaEntry = ({ entry, handleDelete, handleSelect }) => {
  const GunplaDTO = GunplaDTOFromEntry(entry);
  return (
    <>
      <tr className="selectable">
        <td>{GunplaDTO.id}</td>
        <td>{GunplaDTO.name}</td>
        <td>{GunplaDTO.grade}</td>
        <td>{GunplaDTO.series}</td>
        <td>
          <button
            className="button is-primary"
            onClick={() => handleSelect(GunplaDTO)}
          >
            Seleccionar
          </button>
        </td>
        <td>
          <button
            className="button is-danger"
            onClick={() => handleDelete(entry)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
