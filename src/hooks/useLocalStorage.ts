import { useState, useEffect } from 'react';

const useLocalStorage = (key: string) => {
  const [LSValue, setLSValue] = useState(() => {
    return localStorage.getItem(key) ?? '';
  });

  useEffect(() => {
    localStorage.setItem(key, LSValue);
  }, [key, LSValue]);

  const getValueFromLS = () => {
    return LSValue;
  };

  const setValueToLS = (value: string) => {
    setLSValue(value);
  };

  return { setValueToLS, getValueFromLS };
};

export default useLocalStorage;
