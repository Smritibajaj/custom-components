import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import ReactSelect from 'react-select';

import { Icon } from '../Icon';
import { makeStyles } from './styles';
import type { SelectProps } from './types';

export const Select = ({
	isClearable = true,
	isDisabled = false,
	isMulti = false,
	isSearchable = true,
	label,
	required,
	components,
	customStyles = {},
	error,
	helperText,
	...rest
}: SelectProps) => {
	const theme = useTheme();

	return (
		<FormControl disabled={isDisabled}>
			{label && <FormLabel required={required}>{label}</FormLabel>}

			<ReactSelect
				components={{
					ClearIndicator: props => {
						const {
							innerProps: { ref, ...restInnerProps },
						} = props;
						return (
							<span {...restInnerProps} ref={ref}>
								<Icon iconName="X" size={16} weight="bold" />
							</span>
						);
					},
					DropdownIndicator: () => (
						<Icon iconName="CaretDown" size={16} weight="bold" />
					),
					IndicatorSeparator: () => null,
					...(components ?? {}),
				}}
				isClearable={isClearable}
				isDisabled={isDisabled}
				isMulti={isMulti}
				isSearchable={isSearchable}
				menuPlacement="bottom"
				styles={makeStyles(theme, customStyles)}
				{...rest}
			/>

			{helperText ? (
				<FormHelperText error={!!error}>{helperText}</FormHelperText>
			) : null}
		</FormControl>
	);
};
