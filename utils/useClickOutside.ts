import { useEffect, useRef } from 'react';

export function useClickOutside(callback: () => void) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;