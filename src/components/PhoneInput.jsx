import { useState } from 'react';

const phoneInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    const len = rawValue.length;

    let formattedValue = '';
    if (len === 0) {
      formattedValue = '';
    } else if (len <= 3) {
      formattedValue = `(${rawValue}`;
    } else if (len <= 6) {
      formattedValue = `(${rawValue.slice(0, 3)}) ${rawValue.slice(3)}`;
    } else {
      formattedValue = `(${rawValue.slice(0, 3)}) ${rawValue.slice(3, 6)}-${rawValue.slice(6)}`;
    }
    
    setValue(formattedValue);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default phoneInput;