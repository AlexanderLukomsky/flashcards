import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const onToggle = () => {
    setValue((prev) => !prev);
  };

  return { value, onToggle };
};
