import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { theme } from '../../src/theme';

export const ThemeWrapper = ({ children }: { children: React.ReactChild }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
