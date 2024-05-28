import '@mui/material/ButtonGroup';

import type { ColorOverrides } from '../../types';
import type { ClassesOverrides, VariantOverrides } from './types';

declare module '@mui/material/ButtonGroup' {
	interface ButtonGroupClasses extends ClassesOverrides {}

	interface ButtonGroupPropsColorOverrides extends ColorOverrides {}

	// create SizeOverrides type in types file if custom styles are need and extend with that here
	interface ButtonGroupPropsSizeOverrides {
		large: false;
	}

	interface ButtonGroupPropsVariantOverrides extends VariantOverrides {
		contained: false;
		outlined: false;
		text: false;
	}
}
