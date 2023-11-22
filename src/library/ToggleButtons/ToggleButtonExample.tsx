import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonExample = () => {
  const [selectedValue, setSelectedValue] = useState('own'); // 'own' or 'all'

  const handleToggle = (event, newValue) => {
    if (newValue !== null) {
      setSelectedValue(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={handleToggle}
      aria-label="toggle-button-group"
    >
      <ToggleButton value="own" aria-label="own">
        Own
      </ToggleButton>
      <ToggleButton value="all" aria-label="all">
        All
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonExample;
