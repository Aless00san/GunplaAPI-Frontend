import { GunplaDTOFromEntry } from '../Model/GunplaDTO.js';

export const GunplaEntry = ({
  entry,
  handleDelete,
  handleSelect,
  isLogged,
}) => {
  const GunplaDTO = GunplaDTOFromEntry(entry);
  return (
    <>
      <tr className='selectable'>
        <td>{GunplaDTO.id}</td>
        <td>{GunplaDTO.name}</td>
        <td>{GunplaDTO.grade}</td>
        <td>{GunplaDTO.series}</td>
        <td>
          <button
            className='button is-info'
            onClick={() => handleSelect(GunplaDTO)}
            disabled={!isLogged}
          >
            Editar
          </button>
        </td>
        <td>
          <button
            className='button is-danger'
            onClick={() => handleDelete(entry)}
            disabled={!isLogged}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
