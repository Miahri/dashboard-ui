import React, {FC} from 'react';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type PropsType = {
  alignment: string
  setAlignment: (newAlignment: string) => void
}

export const ViewToggle: FC<PropsType> = ({alignment, setAlignment}) => {

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="module" aria-label="module">
      <ViewModuleIcon/>
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon/>
    </ToggleButton>
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
};