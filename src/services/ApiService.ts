const getApiData = async (searchValue: string) => {
  let url = 'https://swapi.dev/api/planets/';
  if (searchValue) {
    url += `?search=${searchValue}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
  }
};

export default getApiData;
