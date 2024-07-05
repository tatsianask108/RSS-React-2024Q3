const getApiData = async (searchValue: string) => {
  let url = 'https://swapi.dev/api/planets/';
  if (searchValue) {
    url += `?search=${searchValue}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.results);
  return data.results;
};

export default getApiData;
