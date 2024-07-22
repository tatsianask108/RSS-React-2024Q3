export const createCardUrl = (currentPage: number, url: string) => {
  const parsedUrl = url.split('/');
  const planetId = parsedUrl[parsedUrl.length - 2];
  return `page/${currentPage}/details/planetId=${planetId}`;
};

export const getPlanetIdFromUseParams = (str: string) => {
  const chunks = str.split('=');
  return chunks[1];
};
