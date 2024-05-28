import type { Theme } from '@mui/material/styles';
import type { StylesConfig } from 'react-select';

import type { Option } from './types';

export const makeStyles = (
	theme: Theme,
	customStyles: StylesConfig<Option> = {}
): StylesConfig<Option> => ({
	container: (styles, args) => ({
		...styles,
		...(customStyles?.container && customStyles.container(styles, args)),
	}),
	control: (styles, args) => ({
		...styles,
		background: args.isDisabled
			? theme.palette['D-10']
			: theme.palette.white,
		border: `1px solid ${
			theme.palette[
				args.menuIsOpen ? 'P-50' : args.isDisabled ? 'D-30' : 'D-50'
			]
		}`,
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2.5, 4),
		...(customStyles?.control && customStyles.control(styles, args)),
	}),
	clearIndicator: (styles, args) => ({
		...styles,
		padding: 0,
		...(customStyles?.clearIndicator &&
			customStyles.clearIndicator(styles, args)),
	}),
	dropdownIndicator: (styles, args) => ({
		...styles,
		padding: 0,
		...(customStyles?.dropdownIndicator &&
			customStyles.dropdownIndicator(styles, args)),
	}),
	//   group: (styles) => ({ ...styles }),
	//   groupHeading: (styles) => ({ ...styles }),
	indicatorsContainer: (styles, args) => ({
		...styles,
		display: 'flex',
		gap: theme.spacing(2),
		...(customStyles?.indicatorsContainer &&
			customStyles.indicatorsContainer(styles, args)),
	}),
	indicatorSeparator: (styles, args) => ({
		...styles,
		margin: 0,
		...(customStyles?.indicatorSeparator &&
			customStyles.indicatorSeparator(styles, args)),
	}),
	input: (styles, args) => ({
		...styles,
		margin: 0,
		padding: 0,
		...(customStyles?.input && customStyles.input(styles, args)),
	}),
	//   loadingIndicator: styles => ({...styles}),
	loadingMessage: (styles, args) => ({
		...styles,
		...theme.typography.bodyMedium,
		fontFamily: theme.typography.fontFamily,
		...(customStyles?.loadingMessage &&
			customStyles.loadingMessage(styles, args)),
	}),
	menu: (styles, args) => ({
		...styles,
		boxShadow: `0px 10px 18px rgba(51, 51, 52, 0.15), 0px 0px 1px rgba(51, 51, 52, 0.31)`,
		...(customStyles?.menu && customStyles.menu(styles, args)),
	}),
	menuList: (styles, args) => ({
		...styles,
		padding: '8px 0',
		...(customStyles?.menuList && customStyles.menuList(styles, args)),
	}),
	//   menuPortal: (styles) => ({ ...styles }),
	//   multiValue: (styles) => ({ ...styles }),
	//   multiValueLabel: (styles) => ({ ...styles }),
	//   multiValueRemove: (styles) => ({ ...styles }),
	//   noOptionsMessage: (styles) => ({ ...styles }),
	option: (styles, args) => ({
		...styles,
		...theme.typography.bodyMedium,
		fontFamily: theme.typography.fontFamily,
		background: args.isSelected
			? `${theme.palette['P-10']} !important`
			: args.isFocused
			? theme.palette['P-10']
			: theme.palette.white,
		color: args.isSelected ? theme.palette['P-50'] : theme.palette['D-90'],
		cursor: args.isDisabled ? 'not-allowed' : 'pointer',
		pointerEvents: 'auto',
		...(customStyles?.option && customStyles.option(styles, args)),
	}),
	placeholder: (styles, args) => ({
		...styles,
		color: theme.palette['D-40'],
		...(customStyles?.placeholder &&
			customStyles.placeholder(styles, args)),
	}),
	singleValue: (styles, args) => ({
		...styles,
		color: args.isDisabled ? theme.palette['D-30'] : theme.palette['D-90'],
		...(customStyles?.singleValue &&
			customStyles.singleValue(styles, args)),
	}),
	valueContainer: (styles, args) => ({
		...styles,
		...theme.typography.bodyMedium,
		fontFamily: theme.typography.fontFamily,
		padding: 0,
		...(customStyles?.valueContainer &&
			customStyles.valueContainer(styles, args)),
	}),
});
