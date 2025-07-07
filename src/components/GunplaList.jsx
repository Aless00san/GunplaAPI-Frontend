import { GunplaEntry } from "./GunplaEntry.jsx";
import "./../style/gunpladb.css";

export const GunplaList = ({ entries, handleDelete, handleSelect }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Grado</th>
            <th>Serie</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <GunplaEntry
                key={entry.id}
                entry={entry}
                handleDelete={handleDelete}
                handleSelect={handleSelect}
              ></GunplaEntry>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
