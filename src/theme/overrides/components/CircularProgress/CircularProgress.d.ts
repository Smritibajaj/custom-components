import '@mui/material/CircularProgress';

import type { ColorOverrides } from '../../types';

declare module '@mui/material/CircularProgress' {
	interface CircularProgressPropsColorOverrides extends ColorOverrides {}
}
