

import { useState, useEffect } from 'react';
import { iBook } from '../interface/book';

interface LocalStorageOptions {
  key: string;
  initialValue: iBook[]; // Change the type to an array of iBook
}

const useLocalStorage = ({ key, initialValue }: LocalStorageOptions) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;