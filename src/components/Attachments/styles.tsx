import type { TypographyProps } from '@mui/material';
import { Box, styled, Typography } from '@mui/material';

import { Tooltip } from '../Tooltip';

export const StyledValueContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(1),
	alignItems: 'center',
	borderRadius: 4,
	background: theme.palette['D-10'],
	color: theme.palette['D-70'],
	'.MuiTypography-root': { color: theme.palette['D-70'] },
	padding: theme.spacing(0.5, 1),
}));

export const StyledLabel = styled(props => (
	<Typography {...props} variant="captionMedium" color="D-50" />
))();

export const StyledEllipsedTypography = styled((props: TypographyProps) => (
	<Tooltip title={props.children}>
		<Typography {...props} />
	</Tooltip>
))<
	TypographyProps & {
		maxWidth: number | string;
	}
>(({ maxWidth }) => ({
	maxWidth,
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
}));
