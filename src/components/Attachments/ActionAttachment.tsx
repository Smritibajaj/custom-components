import {
	Avatar,
	Box,
	Stack,
	styled,
	Typography,
	useTheme,
} from '@mui/material';
import { CalendarBlank, Lightning, X } from 'phosphor-react';
import { memo } from 'react';

import {
	StyledEllipsedTypography,
	StyledLabel,
	StyledValueContainer,
} from './styles';
import type {
	IActionAttachmentProps,
	TActionAttachmentSize,
	TActionPriority,
} from './types';

/**
 * To show action attachment (Note: it's not a file attachment)
 * with details like
 * - description
 * - due date
 * - assigned by
 * - status
 */
const ActionAttachment = (props: IActionAttachmentProps) => {
	const theme = useTheme();
	const {
		title,
		description,
		priority = 'low',
		size = 'medium',
		meta,
		onRemove,
	} = props;
	return (
		<StyledActionAttachmentContainer size={size}>
			<StyledMainIconContainer size={size} priority={priority}>
				<Lightning size={24} weight="fill" />
			</StyledMainIconContainer>
			<Stack spacing={3}>
				<div
					style={{
						display: 'grid',
						columnGap: theme.spacing(1),
						alignItems: 'center',
						gridTemplateColumns: 'auto 1fr',
					}}
				>
					<Typography variant="bodyMedium" color="D-80">
						{title}
					</Typography>
					<StyledEllipsedTypography
						variant="descriptionMedium"
						color="D-60"
						maxWidth="100%"
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
						{meta.dueDate && (
							<StyledLabelValue
								label={meta.dueDate?.label ?? 'Due by'}
								value={
									<StyledValueContainer>
										<CalendarBlank size={14} />
										<Typography variant="descriptionMedium">
											{meta.dueDate?.value}
										</Typography>
									</StyledValueContainer>
								}
							/>
						)}
						{!!meta.assignedBy && (
							<StyledLabelValue
								label={meta.assignedBy?.label ?? 'Created by'}
								value={
									<StyledValueContainer>
										{!!meta.assignedBy?.img && (
											<Avatar
												src={
													meta.assignedBy
														.img as string
												}
												sx={{
													height: 18,
													width: 18,
												}}
											/>
										)}
										<Typography variant="descriptionMedium">
											{meta.assignedBy?.name}
										</Typography>
									</StyledValueContainer>
								}
							/>
						)}
						{!!meta.status && (
							<StyledLabelValue
								label={meta.status?.label ?? 'Status'}
								value={
									<StyledValueContainer>
										<Typography variant="descriptionMedium">
											{meta.status?.value}
										</Typography>
									</StyledValueContainer>
								}
							/>
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
		</StyledActionAttachmentContainer>
	);
};

const StyledActionAttachmentContainer = styled(Box)<{
	size: TActionAttachmentSize;
}>(({ theme, size }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	columnGap: theme.spacing(2),
	padding: size === 'medium' ? theme.spacing(1, 2, 1, 1) : theme.spacing(2),
	boxSizing: 'border-box',
	maxWidth: 712,
	borderRadius: theme.shape.borderRadius,
	outline: `1px solid ${theme.palette['D-15']}`,
	'&:hover': {
		background: theme.palette['P-10'],
	},
}));

const StyledMainIconContainer = styled(Box)<{
	size: TActionAttachmentSize;
	priority: TActionPriority;
}>(({ theme, size, priority }) => {
	const colorMap: {
		[key in TActionPriority]: {
			backgroundColor: keyof typeof theme.palette;
			iconColor: keyof typeof theme.palette;
		};
	} = {
		low: { backgroundColor: 'G-10', iconColor: 'G-60' },
		medium: { backgroundColor: 'O-10', iconColor: 'O-50' },
		high: { backgroundColor: 'R-5', iconColor: 'R-40' },
	};

	return {
		display: 'flex',
		alignItems: 'center',
		alignSelf: 'flex-start',
		padding: size === 'medium' ? theme.spacing(3.5) : 0,
		background:
			size === 'medium'
				? theme.palette[colorMap[priority].backgroundColor]
				: 'transparent',
		color: theme.palette[colorMap[priority].iconColor],
		borderRadius: 4,
	};
});

const StyledLabelValue = ({
	label,
	value,
}: {
	label: string;
	value: JSX.Element;
}) => (
	<Stack direction="row" alignItems="center" spacing={1}>
		<StyledLabel>{label}</StyledLabel>
		{value}
	</Stack>
);

export default memo(ActionAttachment);
