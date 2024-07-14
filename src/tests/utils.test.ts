import { it, expect } from 'vitest';
import { createCardUrl, getPlanetIdFromUseParams } from '../utils/utils';

it('createCardUrl should create a valid URL', () => {
  const currentPage = 2;
  const url = 'https://swapi.dev/api/planets/1/';
  const expectedUrl = 'page/2/details/planetId=1';

  const result = createCardUrl(currentPage, url);

  expect(result).toEqual(expectedUrl);
});

it('getPlanetIdFromUseParams should return the planet ID from a given string', () => {
  const str = '/details/planetId=1';
  const expectedId = '1';

  const result = getPlanetIdFromUseParams(str);

  expect(result).toEqual(expectedId);
});
