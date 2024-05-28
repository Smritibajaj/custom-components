import type { ReactDatePickerCustomHeaderProps, ReactDatePickerProps } from 'react-datepicker';
export type DatePickerProps = ReactDatePickerProps<string, boolean> & {
    label?: string;
    required?: boolean;
    helperText?: string;
    error?: boolean;
};
export type IHeaderProps = ReactDatePickerCustomHeaderProps & {
    monthsShown: ReactDatePickerProps['monthsShown'];
};
//# sourceMappingURL=types.d.ts.map