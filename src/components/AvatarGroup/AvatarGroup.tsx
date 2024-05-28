import MuiAvatarGroup from '@mui/material/AvatarGroup';
import React, { memo } from 'react';

import { UserAvatar } from '../Avatar';
import type { AvatarGroupProps } from './types';

const AvatarGroup = ({ avatarSize, users, ...rest }: AvatarGroupProps) => (
	<MuiAvatarGroup {...rest}>
		{users.map((user, idx) => (
			<UserAvatar
				key={`${user.displayName}-${idx}`}
				size={avatarSize}
				user={user}
			/>
		))}
	</MuiAvatarGroup>
);

export default memo(AvatarGroup);
