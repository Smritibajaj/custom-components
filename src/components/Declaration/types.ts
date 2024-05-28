import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import type { FormControlProps } from '@mui/material/FormControl';
import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';

export type DeclarationProps = FormControlProps &
	Omit<MuiFormControlLabelProps, 'control' | 'variant'> &
	Pick<MuiCheckboxProps, 'indeterminate'> & {
		label: string;
		error?: boolean;
		required?: boolean;
		field?: string;
		disabled?: boolean;
		helperText?: string;
	};
