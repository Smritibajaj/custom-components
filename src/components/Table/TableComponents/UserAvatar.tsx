import { Box } from '@mui/material';
import React from 'react';

import { UserAvatar as CusUserAvatar } from '../../Avatar';
import { Typography } from '../../Typography';

const UserAvatar = ({ user }) => (
	<Box
		display="flex"
		sx={theme => ({
			gap: theme.spacing(2),
		})}
	>
		<CusUserAvatar user={user} />
		<Box
			display="flex"
			sx={{
				flexDirection: 'column',
			}}
		>
			<Typography>{user?.displayName ?? user?.name}</Typography>
			{user?.email ? (
				<Typography
					color={theme => theme.palette.text.secondary}
					variant="descriptionMedium"
					sx={{
						textOverflow: 'ellipsis',
						maxWidth: '100%',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}
				>
					{user?.email}
				</Typography>
			) : null}
		</Box>
	</Box>
);
export default UserAvatar;
