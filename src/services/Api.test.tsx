import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchAllPlanets, fetchPlanet } from './ApiService';

const mockPlanetData = {
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: [],
  films: [],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/1/',
};

const mockResp = {
  count: 60,
  next: null,
  previous: null,
  results: [mockPlanetData],
};

describe('ApiService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  describe('fetchAllPlanets', () => {
    it('should fetch all planets', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        json: async () => mockResp,
      } as Response);

      const data = await fetchAllPlanets('Tatooine', 1);

      expect(data).toEqual(mockResp);
      expect(globalThis.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets/?search=Tatooine');
    });

    it('should fetch planets with page parameter', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        json: async () => mockResp,
      } as Response);

      const data = await fetchAllPlanets('', 2);

      expect(data).toEqual(mockResp);
      expect(globalThis.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets/?page=2');
    });

    it('should handle errors', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('API Error'));

      const data = await fetchAllPlanets('Tatooine', 1);

      expect(data).toBeUndefined();
      expect(console.log).toHaveBeenCalledWith('Error fetching data', expect.any(Error));
    });
  });

  describe('fetchPlanet', () => {
    it('should fetch a specific planet by ID', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        json: async () => mockPlanetData,
      } as Response);

      const data = await fetchPlanet('1');

      expect(data).toEqual(mockPlanetData);
      expect(globalThis.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets/1');
    });

    it('should handle errors', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('API Error'));

      const data = await fetchPlanet('1');

      expect(data).toBeUndefined();
      expect(console.log).toHaveBeenCalledWith('Error fetching data', expect.any(Error));
    });
  });
});
