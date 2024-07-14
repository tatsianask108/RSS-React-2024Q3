export const fetchAllPlanets = async (searchValue: string, page: number) => {
  let url = 'https://swapi.dev/api/planets/';

  try {
    if (searchValue) {
      url = `${url}?search=${searchValue}`;
    } else {
      url = `${url}?page=${page}`;
    }
    const response = await fetch(`${url}`);
    const data: IApiData = await response.json();

    return data;
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
