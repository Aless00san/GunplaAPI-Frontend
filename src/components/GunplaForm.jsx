import { useState } from "react";
import { useEffect } from "react";

const initialData = {
  id: 0,
  name: "",
  grade: "",
  serie: "",
};

export const GunplaForm = ({ handleAddGunpla, selectedGunpla }) => {
  const [formData, setFormData] = useState(initialData);
  useEffect(() => {
    setFormData(selectedGunpla);
  }, [selectedGunpla]);
  return (
    <>
      <form
        className="form mb-5"
        onSubmit={(e) => {
          e.preventDefault();

          if (!formData.name || !formData.grade || !formData.serie) {
            alert("Todos los campos son requeridos");
            return;
          }

          handleAddGunpla(formData);
          setFormData(initialData);
        }}
      >
        <div className="field">
          <label className="label is-small">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={formData.name}
              placeholder="Nombre del Gunpla"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
        </div>

        <div className="field">
          <label className="label is-small">Grado</label>
          <div className="select" style={{ width: "100%" }}>
            <select
              style={{ width: "100%" }}
              defaultValue={"Selecciona el Grado"}
              value={formData.grade}
              onChange={(e) =>
                setFormData({ ...formData, grade: e.target.value })
              }
            >
              <option disabled>Selecciona el Grado</option>
              <option>HG</option>
              <option>MG</option>
              <option>PG</option>
              <option>SD</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label is-small">Serie</label>
          <div className="control">
            <input
              className="input"
              value={formData.serie}
              type="text"
              placeholder="Serie del Gunpla"
              onChange={(e) =>
                setFormData({ ...formData, serie: e.target.value })
              }
            />
          </div>
          <div className="field is-grouped">
            <button type="submit" className="button is-primary mt-2">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
