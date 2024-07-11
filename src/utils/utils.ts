export const getSearchValueFromLS = () => localStorage.getItem('searchValueTS') ?? '';

export const setSearchValueToLS = (value: string) => localStorage.setItem('searchValueTS', value);
