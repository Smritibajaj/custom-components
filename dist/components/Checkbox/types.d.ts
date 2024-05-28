import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import type { FormGroupProps } from '@mui/material/FormGroup';
import type { Variant } from '../../theme/overrides/components/FormControlLabel/types';
export type CheckboxProps = MuiCheckboxProps;
export type CheckboxWithLabelProps = Omit<MuiFormControlLabelProps, 'control' | 'variant'> & Pick<MuiCheckboxProps, 'indeterminate'> & {
    variant: Variant;
};
export type CheckboxGroupProps = FormGroupProps & {
    disabled?: boolean;
    error?: boolean;
    label: string;
    options: Omit<CheckboxWithLabelProps, 'control' | 'variant'>[];
    required?: boolean;
    variant?: CheckboxWithLabelProps['variant'];
    selectAll?: string | boolean;
    value?: any;
    helperText?: string;
    isMultiSelect?: boolean;
};
//# sourceMappingURL=types.d.ts.map