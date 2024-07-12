export const createCardUrl = (url: string) => {
  const arr = url.split('/');
  return `/details/planetId=${arr[arr.length - 2]}`;
};

export const getPlanetIdFromUseParams = (str: string) => {
  const parts = str.split('=');
  return parts[1];
};
