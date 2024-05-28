import '@mui/material/styles';

import type { ColorPalette } from '../../colors';
import type { TypographyOverrides } from '../Typography';

declare module '@mui/material/styles' {
	interface TypographyVariants extends TypographyOverrides {}

	interface TypographyVariantsOptions extends TypographyOverrides {}

	// [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
	interface Palette extends ColorPalette {}

	// [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
	interface PaletteOptions extends ColorPalette {}
}
