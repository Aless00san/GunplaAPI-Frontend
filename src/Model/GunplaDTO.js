import { gradeByName } from '../services/GradeService';
import { seriesByName } from '../services/SeriesService';

//DTO for gunpla storing only name, grade.name and series.name
export const GunplaDTO = {
  id: 0,
  name: '',
  grade: '',
  series: '',
};

export function GunplaDTOFromEntry(entry) {
  if (entry.grade.name != undefined) {
    return {
      id: entry.id,
      name: entry.name,
      grade: entry.grade.name,
      series: entry.series.name,
    };
  } else return entry;
}

export async function GunplaFromDTO(gunplaDTO) {
  try {
    const series = await seriesByName(gunplaDTO.series);
    const grade = await gradeByName(gunplaDTO.grade);
    return {
      id: gunplaDTO.id,
      name: gunplaDTO.name,
      grade: grade,
      series: series,
    };
  } catch (error) {
    console.log(error);
    return {
      id: gunplaDTO.id,
      name: gunplaDTO.name,
      grade: undefined,
      series: undefined,
    };
  }
}
