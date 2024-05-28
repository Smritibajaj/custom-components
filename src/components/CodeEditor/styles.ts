import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EditorContainer = styled(Box)`
	position: 'relative';
`;

export const EditorHeader = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CodeEditorArea = styled(Box)<{
	error?: boolean;
	height?: string;
}>(({ theme, error, height = '280px' }) => ({
	tabSize: '4ch',
	minHeight: '150px',
	maxHeight: height,
	height: 'unset',
	overflow: 'auto',

	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(0.5),
	borderRadius: theme.shape.borderRadius,
	border: `1px solid ${
		error ? theme.palette['R-40'] : theme.palette['D-50']
	} !important`,
	outline: `${
		error ? theme.palette['R-40'] : theme.palette['D-50']
	}  !important`,

	'::-webkit-scrollbar': {
		display: 'none',
	},
	/* Hide scrollbar for IE, Edge and Firefox */
	'-ms-overflow-style': 'none' /* IE and Edge */,
	'scrollbar-width': 'none' /* Firefox */,

	// '.monaco-scrollable-element>.scrollbar>.slider': {
	// 	background: 'unset',
	// },
	// '.slider': {
	// 	display: 'none',
	// },

	/* Style the suggestion box container */
	'.monaco-editor .suggest-widget': {
		backgroundColor: '#fff',
		border: `1px solid ${theme.palette['D-40']} !important`,
		borderRadius: '8px',
		color: theme.palette['D-90'],
	},

	/* Style the suggestion list */
	'.monaco-editor .suggest-widget .monaco-list': {
		padding: '0',
		margin: '0',
		listStyle: 'none',
	},

	/* Style individual suggestion items */
	'.monaco-editor .suggest-widget .monaco-list .monaco-list-row': {
		cursor: 'pointer',
	},

	/* Style the selected suggestion item */
	'.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused': {
		backgroundColor: `${theme.palette['P-10']} !important`,
		color: theme.palette['P-50'],
	},
	'.monaco-list.list_id_1:focus .monaco-list-row.selected .codicon div': {
		backgroundColor: '#fff !important',
	},
	'.monaco-list.list_id_1 .monaco-list-row.focused .codicon div ': {
		backgroundColor: '#fff !important',
	},
}));

export const ModalConatiner = styled(Box)(({ theme }) => ({
	position: 'absolute',
	height: '350px',
	width: '80%',
	zIndex: 1000,
}));

const CustomContainerWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid',
	borderColor: theme.palette['D-15'],
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#fff !important',

	'& .header': {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(4),
		alignItems: 'flex-start',
		gap: theme.spacing(1),
		borderBottom: '1px solid',
		borderColor: theme.palette['D-15'],
	},

	'& .body': {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
		padding: theme.spacing(4),
		maxHeight: '350px',
		overflow: 'scroll',

		'& .groupList': {
			display: 'flex',
			flexDirection: 'column',
			gap: theme.spacing(4),
			width: '100%',

			'& .pill': {
				border: '1px solid #bcbbbe',
				borderRadius: theme.spacing(2),
				padding: '4px 8px',
				fontSize: '12px !important',
				width: 'max-content',
				cursor: 'pointer',
				display: 'inherit',
				wordBreak: 'break-all',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				maxWidth: '20ch',
				'&:hover': {
					background:
						'linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.9)),#0f72ee',
					borderColor: '#0f72ee',
				},
			},
		},
		'& .MuiAccordion-root.Mui-expanded': {
			border: `1px solid ${theme.palette['D-15']} !important`,
			borderRadius: theme.shape.borderRadius,
			margin: theme.spacing(2),
		},
		'& .MuiAccordionSummary-root': {
			borderTop: 'none !important',
			backgroundColor: theme.palette['D-10'],
		},
		'& .MuiAccordionSummary-root.Mui-expanded': {
			borderBottomLeftRadius: '0 !important',
			borderBottomRightRadius: '0 !important',
		},
	},
}));

CustomContainerWrapper.displayName = 'CustomContainerWrapper';

export { CustomContainerWrapper };
