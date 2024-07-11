import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface IPlanet {
  name: string;
  terrain: string;
  climate: string;
  population: string;
}

export interface ISearchState {
  searchValue: string | null;
}

export interface ISearchProps {
  planetList: (searchValue: string) => void;
}

export type TListView = {
  planetsList: IPlanet[];
  title: string;
};

export type TCard = {
  planet: IPlanet;
};

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface IState {
  planetsList: IPlanet[];
  isLoading: boolean;
}
