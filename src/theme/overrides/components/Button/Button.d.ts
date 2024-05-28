import '@mui/material/Button';

import type { ColorOverrides } from '../../types';
import type { ClassesOverrides, VariantOverrides } from './types';

declare module '@mui/material/Button' {
	interface ButtonClasses extends ClassesOverrides {}

	interface ButtonPropsColorOverrides extends ColorOverrides {}

	// create SizeOverrides type in types file if custom styles are need and extend with that here
	interface ButtonPropsSizeOverrides {
		large: false;
	}

	interface ButtonPropsVariantOverrides extends VariantOverrides {
		contained: false;
		outlined: false;
		text: false;
	}
}
