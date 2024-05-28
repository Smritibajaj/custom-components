/* eslint-disable no-unused-vars */
import type { ButtonProps } from '@mui/material/Button';

// custom variants
export type CustomVariant = 'ghost' | 'primary' | 'secondary' | 'tertiary';

// enabling classes for the variants and variant with sizes i.e {custom_variant}Size{custom_size}
export type ClassesOverrides = { [K in CustomVariant]: string } & {
	[K in `${CustomVariant}Size${Capitalize<
		Exclude<ButtonProps['size'], undefined>
	>}`]: string;
};

// enabling custom variants
export type VariantOverrides = { [K in CustomVariant]: true };
