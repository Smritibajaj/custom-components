import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import { X } from 'phosphor-react';
import { memo } from 'react';

import FileIcon, { getFileExtension } from './FileIcon';
import type { IFileAttachmentProps } from './types';

const FileAttachment = (props: IFileAttachmentProps) => {
	const { filename, meta, size = 'medium', thumbnail, onRemove } = props;
	const fileExtension = getFileExtension(filename);
	const theme = useTheme();
	// meta data to show based on size
	let metaDataToShow = [fileExtension, meta?.filesize, meta?.username];
	if (size === 'medium') {
		metaDataToShow = [meta?.filesize, meta?.username];
	}
	if (size === 'small') {
		metaDataToShow = [meta?.filesize];
	}

	return (
		<StyledFileAttachmentContainer>
			<Stack
				direction="row"
				spacing={theme.spacing(2)}
				alignItems="center"
			>
				{thumbnail && size === 'large' ? (
					<StyledThumbnail src={thumbnail} alt="thumbnail" />
				) : (
					<FileIcon fileName={filename} size={size} />
				)}
				<Stack
					direction={size === 'small' ? 'row' : 'column'}
					spacing={theme.spacing(1)}
					alignItems={size === 'small' ? 'center' : 'flex-start'}
				>
					<Typography variant="bodyMedium" color="D-80">
						{filename}
					</Typography>
					<Typography
						variant={
							size === 'small'
								? 'descriptionMedium'
								: 'captionMedium'
						}
						color="D-50"
					>
						{metaDataToShow
							.filter(val => val != undefined)
							.join(' \u2022 ')}
					</Typography>
				</Stack>
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
		</StyledFileAttachmentContainer>
	);
};

const StyledFileAttachmentContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	columnGap: theme.spacing(2),
	padding: theme.spacing(1, 2, 1, 1),
	borderRadius: theme.shape.borderRadius,
	outline: `1px solid ${theme.palette['D-15']}`,
	'&:hover': {
		background: theme.palette['P-10'],
	},
	width: 265,
	boxSizing: 'border-box',
}));

const StyledThumbnail = styled('img')(({ theme }) => ({
	width: 64,
	height: 64,
	borderRadius: 4,
}));

export default memo(FileAttachment);
