import { GunplaDTOFromEntry } from '../Model/GunplaDTO.js';

export const GunplaEntry = ({
  entry,
  handleDelete,
  handleSelect,
  isLogged,
  hasRole,
}) => {
  const GunplaDTO = GunplaDTOFromEntry(entry);

  const dropEntry = entry => {
    if (hasRole('ROLE_ADMIN')) {
      handleDelete(entry);
    }
  };

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
            onClick={() => dropEntry(entry)}
            disabled={!isLogged || !hasRole('ROLE_ADMIN')}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};
