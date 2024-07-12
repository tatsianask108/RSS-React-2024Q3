export const fetchAllPlanets = async (searchValue: string) => {
  let url = 'https://swapi.dev/api/planets/';
  if (searchValue) {
    url = `${url}?search=${searchValue}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && Array.isArray(data.results)) {
      return data.results;
    } else {
      console.log('Unexpected sever response format', data);
    }
  } catch (e) {
    console.log('Error fetching data', e);
  }
};

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
