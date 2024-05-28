import {
	Avatar,
	Box,
	Stack,
	styled,
	Typography,
	useTheme,
} from '@mui/material';
import { CalendarBlank, NoteBlank, X } from 'phosphor-react';
import { memo } from 'react';

import {
	StyledEllipsedTypography,
	StyledLabel,
	StyledValueContainer,
} from './styles';
import type { INoteAttachmentProps, TNoteAttachmentSize } from './types';

/**
 * To show note attachment (Note: it's not a file attachment)
 * with details like
 * - description
 * - created at
 * - created by
 */
const NoteAttachment = (props: INoteAttachmentProps) => {
	const theme = useTheme();
	const { description, size = 'medium', meta, onRemove } = props;
	return (
		<StyledNoteAttachmentContainer>
			<StyledNoteIconContainer
				size={size}
				sx={{ alignSelf: 'flex-start' }}
			>
				<NoteBlank
					size={24}
					weight="fill"
					color={theme.palette['P-50']}
				/>
			</StyledNoteIconContainer>
			<Stack spacing={3}>
				<div
					style={{
						display: 'grid',
						columnGap: theme.spacing(1),
						alignItems: 'center',
						gridTemplateColumns: 'minmax(auto, 562px)',
					}}
				>
					<StyledEllipsedTypography
						variant="descriptionMedium"
						color="D-60"
					>
						{description}
					</StyledEllipsedTypography>
				</div>
				{!!meta && size === 'medium' && (
					<Stack
						direction="row"
						columnGap={2.5}
						rowGap={1}
						flexWrap="wrap"
					>
						{meta.createdAt && (
							<StyledCreatedAtContainer>
								<CalendarBlank size={14} />
								<Typography
									variant="descriptionMedium"
									color="D-70"
								>
									{meta.createdAt?.value}
								</Typography>
							</StyledCreatedAtContainer>
						)}
						{!!meta.createdBy && (
							<Stack
								direction="row"
								alignItems="center"
								spacing={1}
							>
								<StyledLabel>
									{meta.createdBy?.label ?? 'Created by'}
								</StyledLabel>
								<StyledValueContainer>
									{!!meta.createdBy?.img && (
										<Avatar
											src={meta.createdBy.img as string}
											sx={{ height: 18, width: 18 }}
										/>
									)}
									<Typography variant="descriptionMedium">
										{meta.createdBy?.name}
									</Typography>
								</StyledValueContainer>
							</Stack>
						)}
					</Stack>
				)}
			</Stack>
			{/* wrapped in span to avoid icon getting small when container gets squeezed */}
			{!!onRemove && (
				<span
					style={{
						cursor: 'pointer',
						marginLeft: 'auto',
						display: 'flex',
					}}
				>
					<X
						size={16}
						weight="bold"
						onClick={onRemove}
						color={theme.palette['D-50']}
					/>
				</span>
			)}
		</StyledNoteAttachmentContainer>
	);
};

const StyledNoteAttachmentContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	columnGap: theme.spacing(2),
	padding: theme.spacing(1, 2, 1, 1),
	boxSizing: 'border-box',
	maxWidth: 712,
	minWidth: 'fit-content',
	borderRadius: theme.shape.borderRadius,
	outline: `1px solid ${theme.palette['D-15']}`,
	'&:hover': {
		background: theme.palette['P-10'],
	},
}));

const StyledNoteIconContainer = styled(Box)<{ size: TNoteAttachmentSize }>(
	({ theme, size }) => ({
		display: 'flex',
		alignItems: 'center',
		padding: size === 'medium' ? theme.spacing(3.5) : 0,
		background: size === 'medium' ? theme.palette['P-5'] : 'transparent',
		borderRadius: 4,
	})
);

const StyledCreatedAtContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(2),
	alignItems: 'center',
	background: theme.palette.white,
	borderRadius: 4,
	padding: theme.spacing(0.5),
}));

export default memo(NoteAttachment);
