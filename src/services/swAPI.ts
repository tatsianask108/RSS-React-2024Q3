import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swAPI = createApi({
  reducerPath: 'swAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (build) => ({
    fetchAllPlanets: build.query<IApiData, string>({
      query: (page) => ({
        url: `/planets/?page=${page}`,
      }),
    }),
    fetchPlanetById: build.query<IPlanet, string>({
      query: (planetId) => ({
        url: `/planets/${planetId}`,
      }),
    })
  }),
});
