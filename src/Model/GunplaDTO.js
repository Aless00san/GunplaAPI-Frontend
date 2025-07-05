//DTO for gunpla storing only name, grade.name and series.name
export const GunplaDTO = {
  id: 0,
  name: "",
  grade: "",
  series: "",
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
