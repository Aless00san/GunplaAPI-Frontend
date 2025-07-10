import { useState } from 'react';
import { useEffect } from 'react';

import { gradeList } from '../services/GradeService.js';
import { seriesList } from '../services/SeriesService.js';

const initialData = {
  id: 0,
  name: '',
  grade: '',
  series: '',
};

export const GunplaForm = ({ handleAddGunpla, selectedGunpla, isLogged }) => {
  const [formData, setFormData] = useState(initialData);

  //Fetched values
  const [grades, setGrades] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setFormData(selectedGunpla ? selectedGunpla : initialData);
  }, [selectedGunpla]);

  useEffect(() => {
    gradeList().then(response => {
      setGrades(response.data);
    });
  }, []);

  useEffect(() => {
    seriesList().then(response => {
      setSeries(response.data);
    });
  }, []);

  return (
    <>
      {isLogged ? (
        <form
          className='form mb-5'
          onSubmit={e => {
            e.preventDefault();

            if (!formData.name || !formData.grade || !formData.series) {
              console.log('campos:', formData);
              alert('Todos los campos son requeridos');
              return;
            }

            handleAddGunpla(formData);
            setFormData(initialData);
          }}
        >
          <div className='field'>
            <label className='label is-small'>Nombre</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                value={formData.name}
                placeholder='Nombre del Gunpla'
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className='field'>
            <label className='label is-small'>Grado</label>
            <div
              className='select'
              style={{ width: '100%' }}
            >
              <select
                style={{ width: '100%' }}
                value={formData.grade}
                onChange={e =>
                  setFormData({ ...formData, grade: e.target.value })
                }
              >
                <option
                  disabled
                  value={''}
                >
                  Selecciona el Grado
                </option>
                {grades.map(grade => {
                  return (
                    <option
                      value={grade.name}
                      key={grade.id}
                    >
                      {grade.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className='field'>
            <label className='label is-small'>Serie</label>
            <div
              className='select control'
              style={{ width: '100%' }}
            >
              <select
                style={{ width: '100%' }}
                value={formData.series}
                onChange={e =>
                  setFormData({ ...formData, series: e.target.value })
                }
              >
                <option
                  disabled
                  value={''}
                >
                  Selecciona la Serie
                </option>
                {series.map(serie => {
                  return (
                    <option
                      value={serie.name}
                      key={serie.id}
                    >
                      {serie.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='field is-grouped'>
              <button
                type='submit'
                className='button is-primary mt-2 clickable'
                disabled={!isLogged}
                onClick={() => handleAddGunpla()}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </>
  );
};
