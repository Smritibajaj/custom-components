import '@mui/material/FormControlLabel';

import type { Variant } from './types';

declare module '@mui/material/FormControlLabel' {
	interface FormControlLabelClasses {
		outlined: string;
		standard: string;
	}

	interface FormControlLabelProps {
		variant?: Variant;
	}
}
