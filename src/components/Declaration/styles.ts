import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const DeclarationWrapper = styled(Box)<{ error?: boolean }>(
	({ theme, error }) => ({
		'.MuiFormControlLabel-root': {
			display: 'flex',
			alignItems: 'flex-start',
			width: 'unset',
		},
		'.MuiFormControlLabel-label': {
			paddingTop: theme.spacing(2),
		},
	})
);
