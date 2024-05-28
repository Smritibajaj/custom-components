import { Pagination, Popover, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import MTableFooter from '@mui/material/TableFooter';

export const DrawerContainer = styled(Box)(({ theme }) => ({
	paddingBottom: theme.spacing(3),
	minHeight: '300px',
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	height: 'inherit',
	width: '400px',
	'& form': {
		paddingBottom: '45px',
		border: 'none',
	},
}));

export const TableWrapper = styled(Box)(({ theme }) => ({
	overflow: 'auto',
}));

export const Header = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2, 3),
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	background:
		'linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #807F81',
}));

export const Footer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),
	display: 'flex',
	justifyContent: 'space-evenly',
	gap: theme.spacing(2),
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	border: `0.5px solid ${theme.palette['D-20']}`,
	boxShadow:
		'0px -2px 12px rgba(0, 0, 0, 0.15), 0px 0px 1px rgba(0, 0, 0, 0.25)',

	'> button': {
		width: '100%',
	},
	'.MuiTablePagination-spacer': {
		display: 'none',
	},
}));

export const TableFooterConatiner = styled(MTableFooter)(({ theme }) => ({
	display: 'table',
	width: '100%',
	'.MuiTablePagination-spacer': {
		display: 'none',
	},
	'.MuiTablePagination-toolbar': {
		justifyContent: 'space-between',
	},
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
	'.pageSizeSelector': {
		display: 'flex',
		alignItems: 'center',
		'.limit': {
			margin: '0 6px 0 3px',
			'.selector': {
				background: '#e7f1fe',
				padding: '6px',
				display: 'flex',
				alignItems: 'center',
				borderRadius: '2px',
			},
		},
	},
}));

export const StyledPopOver = styled(Popover)(({ theme }) => ({
	height: '100%',
	'& .MuiPaper-root': {
		padding: '5px 0px',
		boxShadow: '0 1px 8px 0 rgba(153, 155, 168, 0.32)',
		borderRadius: '0px',
		top: '30px',
	},
	'.actionList': {
		'.actionListItem': {
			padding: '5px 10px',
			display: 'flex',
			alignItems: 'center',
			minHeight: '45px',
			minWidth: '52px',
			'&:hover': {
				background: theme.palette.white,
			},
		},
	},
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
	'& .Mui-selected': {
		color: theme.palette['P-50'],
		backgroundColor: `${theme.palette.white} !important`,
	},
	'& :hover': {
		backgroundColor: `${theme.palette.white} !important`,
	},
}));
