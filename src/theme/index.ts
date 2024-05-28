import { createTheme } from '@mui/material/styles';

import { colorPalette } from './colors';
import * as ComponentOverrides from './overrides/components';
import { Typography } from './overrides/Typography';

const theme = createTheme({
	components: ComponentOverrides,
	palette: {
		...colorPalette,
		black: '#000000',
		white: '#ffffff',

		action: {
			disabled: colorPalette['D-30'],
			disabledBackground: colorPalette['D-15'],
		},

		text: {
			disabled: colorPalette['D-30'],
			primary: colorPalette['D-80'],
			secondary: colorPalette['D-50'],
		},
	},

	shape: {
		borderRadius: 8,
	},

	spacing: 4,

	typography: Typography,
});

export { theme };
