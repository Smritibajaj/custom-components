import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import type { FormGroupProps } from '@mui/material/FormGroup';
import type { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import type { Variant } from '../../theme/overrides/components/FormControlLabel/types';
export type SwitchProps = MuiSwitchProps;
export type SwitchWithLabelProps = Omit<MuiFormControlLabelProps, 'control' | 'variant'> & {
    variant: Variant;
    helperText: string;
};
export type SwitchGroupProps = FormGroupProps & {
    disabled?: boolean;
    error?: boolean;
    label: string;
    options: Omit<SwitchWithLabelProps, 'control' | 'variant'>[];
    required?: boolean;
    variant?: SwitchWithLabelProps['variant'];
};
//# sourceMappingURL=types.d.ts.map