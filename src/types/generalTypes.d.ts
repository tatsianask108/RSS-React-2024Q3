interface IApiData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanet[];
}

interface IPlanet {
  name: string;
  terrain: string;
  climate: string;
  population: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  url: string;
}

interface IPageState {
  pageNumber: number;
}

interface ISearchState {
  searchQuery: string;
}

interface ISelectedItemsState {
  selectedItems: IPlanet[];
}

interface IQueryParams {
  searchQuery: string;

  page: number;
}
