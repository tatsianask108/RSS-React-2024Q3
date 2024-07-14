export interface IPaginationProps {
  currentPage: number;
  changePage: (newPage: number) => void;
  apiData: IApiData | undefined;
}
