import 'react-datepicker/dist/react-datepicker.css';

import { useTheme } from '@mui/material';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import range from 'lodash/range';
import { memo } from 'react';

import { Select } from '../Select';
import { MONTHS } from './constants';
import { Header, NavigationCaret, selectContainerStyles } from './styles';
import type { IHeaderProps } from './types';
import { Icon } from '../Icon';

const CustomHeader = (headerProps: IHeaderProps) => {
	const theme = useTheme();
	const {
		changeYear,
		changeMonth,
		decreaseMonth,
		increaseMonth,
		customHeaderCount,
		monthDate,
		monthsShown = 1,
		prevMonthButtonDisabled,
		nextMonthButtonDisabled,
	} = headerProps;

	const years = range(1990, getYear(new Date()) + 100, 1).map(item => ({
		label: `${item}`,
		value: item,
	}));

	const MAX_YEAR_CHAR = 4;
	const MAX_MONTH_CHAR = 9;

	return (
		<Header>
			<NavigationCaret
				color={'D-50'}
				iconName="CaretLeft"
				variant="ghost"
				disabled={prevMonthButtonDisabled}
				hidden={monthsShown > 1 && customHeaderCount === 1}
				onClick={decreaseMonth}
			/>

			<Select
				value={MONTHS[getMonth(monthDate)]}
				options={MONTHS}
				label=""
				isClearable={false}
				onChange={val => changeMonth(MONTHS.indexOf(val))}
				customStyles={selectContainerStyles(theme)}
				components={{
					DropdownIndicator: () => (
						<Icon iconName="CaretDown" size={16} weight="bold" />
					),
					IndicatorSeparator: () => null,
				}}
				onInputChange={inputValue =>
					inputValue.length < MAX_MONTH_CHAR
						? inputValue
						: inputValue.substring(0, MAX_MONTH_CHAR)
				}
			/>

			<Select
				value={{
					label: `${getYear(monthDate)}`,
					value: getYear(monthDate),
				}}
				options={years}
				label=""
				isClearable={false}
				onChange={item => changeYear(item?.value)}
				customStyles={selectContainerStyles(theme)}
				components={{
					DropdownIndicator: () => (
						<Icon iconName="CaretDown" size={16} weight="bold" />
					),
					IndicatorSeparator: () => null,
				}}
				onInputChange={inputValue =>
					inputValue.length < MAX_YEAR_CHAR
						? inputValue
						: inputValue.substring(0, MAX_YEAR_CHAR)
				}
			/>

			<NavigationCaret
				color={'D-50'}
				iconName="CaretRight"
				variant="ghost"
				disabled={nextMonthButtonDisabled}
				hidden={monthsShown > 1 && customHeaderCount === 0}
				onClick={increaseMonth}
			/>
		</Header>
	);
};

export default memo(CustomHeader);
