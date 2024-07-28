import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swAPI = createApi({
  reducerPath: 'swAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (build) => ({
    fetchAllPlanets: build.query<IApiData, IQueryParams>({
      query: ({ page, searchQuery }) => {
        const pageUrl = `/planets/?page=${page}`;
        const url = searchQuery ? `/planets/?search=${searchQuery}` : pageUrl;
        return { url };
      },
      keepUnusedDataFor: 0,
    }),
  }),
});
