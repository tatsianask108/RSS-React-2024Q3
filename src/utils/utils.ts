export const createCardUrl = (currentPage: number, url: string) => {
  const arr = url.split('/');
  return `page/${currentPage}/details/planetId=${arr[arr.length - 2]}`;
};

export const getPlanetIdFromUseParams = (str: string) => {
  //TODO handle if there is more than one '='
  const chunks = str.split('=');
  return chunks[1];
};
