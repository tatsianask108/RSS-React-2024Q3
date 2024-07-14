export const createCardUrl = (currentPage: number, url: string) => {
  const arr = url.split('/');
  return `page/${currentPage}/details/planetId=${arr[arr.length - 2]}`;
};

export const getPlanetIdFromUseParams = (str: string) => {
  const chunks = str.split('=');
  return chunks[1];
};
