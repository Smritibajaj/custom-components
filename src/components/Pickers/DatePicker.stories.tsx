import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import DatePicker from './DatePicker';
import type { DatePickerProps } from './types';

export default {
	args: {
		disabled: false,
		placeholderText: 'Select date',
		label: 'Field label',
		required: true,
		minDate: new Date('01/01/1800'),
		maxDate: new Date('12/31/2200'),
		monthsShown: 1,
		focusSelectedMonth: true,
		isClearable: false,
	},
	component: DatePicker,
	title: 'Components/Pickers/DatePicker',
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => {
	const [selectedDate, setSelectedDate] = useState<{
		startDate: Date | null;
		endDate: Date | null;
	}>({ startDate: null, endDate: null });

	const onChange: DatePickerProps['onChange'] = date => {
		if (args?.selectsRange) {
			// Handle range picker state
			setSelectedDate({ startDate: date[0], endDate: date[1] });
		} else {
			// Handle simple date state
			setSelectedDate({ startDate: date, endDate: null });
		}
	};

	return (
		<DatePicker
			{...args}
			{...(args?.selectsRange
				? { ...selectedDate, selected: selectedDate?.startDate }
				: { selected: selectedDate?.startDate })}
			onChange={onChange}
		/>
	);
};

export const SimpleDatePicker = Template.bind({});
SimpleDatePicker.args = {};

export const DateRangePickerInSingleCalendar = Template.bind({});
DateRangePickerInSingleCalendar.args = {
	selectsRange: true,
};

export const DateRangePickerWithTwoMonths = Template.bind({});
DateRangePickerWithTwoMonths.args = {
	selectsRange: true,
	monthsShown: 2,
};

export const YearPicker = Template.bind({});
YearPicker.args = {
	showYearPicker: true,
	dateFormat: 'yyyy',
	placeholderText: '',
	label: '',
};

export const MonthPicker = Template.bind({});
MonthPicker.args = {
	placeholderText: '',
	label: '',
	dateFormat: 'MMM, yyyy',
	showMonthYearPicker: true,
	showFullMonthYearPicker: true,
};
