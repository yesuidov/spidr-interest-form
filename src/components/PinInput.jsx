import { useState } from 'react';

const pinInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formattedValue = rawValue.match(/.{1,4}/g)?.join('-') || '';

    setValue(formattedValue);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default pinInput;