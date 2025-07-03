export const GunplaEntry = ({ entry, handleDelete, handleSelect }) => {
  return (
    <>
      <tr className="selectable">
        <td>{entry.id}</td>
        <td>{entry.name}</td>
        <td>{entry.grade}</td>
        <td>{entry.serie}</td>
        <td>
          <button
            className="button is-primary"
            onClick={() => handleSelect(entry)}
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
