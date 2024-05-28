import 'react-datepicker/dist/react-datepicker.css';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { memo } from 'react';

import { Icon } from '../Icon';
import { TextField } from '../TextField';
import CustomHeader from './CustomHeader';
import { MuiBox, ReactDatePicker } from './styles';
import type { DatePickerProps } from './types';

const DatePicker = (props: DatePickerProps) => {
	const {
		isClearable = false,
		disabled = false,
		showPopperArrow = false,
		label,
		required = false,
		selectsRange = false,
		monthsShown = 1,
		dateFormat = 'dd MMM, yyyy',
		helperText,
		error,
		minDate,
		maxDate,
		...rest
	} = props;

	return (
		<FormControl>
			<MuiBox>
				<ReactDatePicker
					renderCustomHeader={headerProps => (
						<CustomHeader
							monthsShown={monthsShown}
							{...headerProps}
						/>
					)}
					required={required}
					disabled={disabled}
					showPopperArrow={showPopperArrow}
					customInput={
						<TextField
							label={label}
							type="text"
							error={error}
							helperText={helperText}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										{isClearable ? (
											<Icon
												iconName="X"
												onClick={evt =>
													rest.onChange(null, evt)
												}
											/>
										) : null}
										<Icon iconName="CalendarBlank" />
									</InputAdornment>
								),
							}}
						/>
					}
					calendarClassName="container"
					monthsShown={monthsShown}
					selectsRange={selectsRange}
					dateFormat={
						rest.showMonthYearPicker
							? 'MMM, yyyy'
							: rest.showMonthYearDropdown
							? 'yyyy'
							: dateFormat
					}
					{...rest}
					minDate={minDate}
					maxDate={maxDate}
				/>
			</MuiBox>
		</FormControl>
	);
};

export default memo(DatePicker);
