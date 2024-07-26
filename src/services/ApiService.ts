
const URL = 'https://swapi.dev/api/planets/';

export const fetchPlanet = async (planetId: string) => {
  try {
    const response = await fetch(`${URL}${planetId}`);
    const data: IPlanet = await response.json();

    return data;
  } catch (e) {
    console.log('Error fetching data', e);
  }
};
