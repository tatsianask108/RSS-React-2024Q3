const getApiData = async (searchValue: string) => {
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

export default getApiData;
