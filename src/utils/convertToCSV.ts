export const convertToCSV = (planets: IPlanet[]): string => {
  const cols = ['Name', 'Terrain', 'Climate', 'Population', 'Diameter'];

  const colsString = cols.join(',');

  const rows = planets.map((planet) =>
    [planet.name, planet.terrain, planet.climate, planet.population, planet.diameter].join(',')
  );
  const csv = [colsString, ...rows].join('\n');
  return `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csv)}`;
};
