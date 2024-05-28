import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import type { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
import type { Variant } from '../../theme/overrides/components/FormControlLabel/types';
export type RadioProps = MuiRadioProps;
export type RadioWithLabelProps = Omit<MuiFormControlLabelProps, 'control' | 'variant'> & {
    variant: Variant;
};
export type RadioGroupProps = MuiRadioGroupProps & {
    disabled?: boolean;
    error?: boolean;
    label: string;
    options: Omit<RadioWithLabelProps, 'control' | 'variant'>[];
    required?: boolean;
    variant?: RadioWithLabelProps['variant'];
    helperText?: string;
};
//# sourceMappingURL=types.d.ts.map