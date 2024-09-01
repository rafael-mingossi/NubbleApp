import {useEffect, useState} from 'react';

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce
 * @param value to be debounced
 * @param delay  in milliseconds `default: 500 ms`
 * @returns debounced value
 * This hook will hold the setDebouncedValue when user is typing by half second, to avoid multiples API calls
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
