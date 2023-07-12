import { useState } from 'react';
import { TextField } from './components/ui/textfield';

export const App = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: '10px' }}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onClear={() => setValue('')}
        label="label"
        type="search"
        placeholder="value"
        id="input"
      />
    </div>
  );
};
