const SEARCH_VALUE = 'searchValueTS';

export const getSearchValueFromLS = () => localStorage.getItem(SEARCH_VALUE) ?? '';

export const setSearchValueToLS = (value: string) => localStorage.setItem(SEARCH_VALUE, value);
