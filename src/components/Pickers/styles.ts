import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import DatePicker from 'react-datepicker';
import type { StylesConfig } from 'react-select';

import { IconButton } from '../Button';
import type { Option } from '../Select/types';

export const ReactDatePicker = styled(DatePicker)(() => ({
	// Input styles
}));

/**
 * NOTE: Please do not change the order of the styles written here
 */

export const MuiBox = styled(Box)(({ theme }) => ({
	'& .container': {
		borderRadius: '0',
		border: `1px solid ${theme.palette['D-15']}`,
		display: 'flex',
	},

	// Calendar popper styles
	'& .react-datepicker__month-container': {
		width: '100%',
	},

	// custom header
	'& .react-datepicker__header': {
		margin: '0',
		padding: '0',
		backgroundColor: theme.palette.white,
		border: 'none',

		'& .react-datepicker__day-names': {
			// Su Mn Tu We Th Fr sa
			marginTop: theme.spacing(3),
			'& > div': {
				color: theme.palette['D-50'],
				width: theme.spacing(10),
				margin: 0,
			},
		},
	},

	'& .react-datepicker__day': {
		margin: theme.spacing(1, 0),
		width: theme.spacing(10),
	},

	// Adding transparent the current date in the next month
	'& div[class*="keyboard-selected"]': {
		backgroundColor: 'transparent',
	},

	'& .react-datepicker__day--in-range, .react-datepicker__day--in-selecting-range':
		{
			borderRadius: '0px',
			backgroundColor: `${theme.palette['P-10']} !important`,
			color: theme.palette.black,
		},

	// Adding primary color for today item
	'& div[class*="day--today"]': {
		backgroundColor: theme.palette['P-10'],
	},

	// Adding primary color for selected item start and end dates
	'& div[class*="day--selected"], .react-datepicker__day--range-end': {
		backgroundColor: `${theme.palette['P-50']} !important`,
		color: theme.palette.white,
		borderRadius: theme.spacing(0.5),
	},

	// Disabling outside month dates in current month
	'& div[class*="outside-month"]': {
		color: theme.palette['D-30'],
		pointerEvents: 'none',
		backgroundColor: 'transparent !important',
	},

	// year picker styles
	'& .react-datepicker__year-wrapper': {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		maxWidth: 'fit-content',
	},

	'& .react-datepicker__close-icon': {
		position: 'absolute',
		height: 'auto',
		transform: 'translateY(100%)',
		bottom: '54%',
		padding: '0px',
		right: '7%',
	},
	'& .react-datepicker__close-icon::after': {
		fontSize: '22px',
		fontFamily: 'none',
		backgroundColor: 'transparent',
		color: theme.palette['D-50'],
	},
}));

export const Header = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: theme.palette['D-5'],
	padding: theme.spacing(2, 4),
	gap: theme.spacing(2),
}));

export const selectContainerStyles = (theme: Theme): StylesConfig<Option> => ({
	control: styles => ({
		...styles,
		minHeight: theme.spacing(7.5),
		minWidth: theme.spacing(25.5),
		padding: theme.spacing(0, 2),
	}),
});

export const NavigationCaret = styled(IconButton)(({ theme, hidden }) => ({
	visibility: `${hidden ? 'hidden' : 'visible'}`,
	pointerEvents: 'none',
	cursor: `${hidden ? 'default' : 'pointer'}`,
	padding: `${theme.spacing(0.75)} !important`,
}));
