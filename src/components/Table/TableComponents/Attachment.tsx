import { Stack } from '@mui/material';
import React from 'react';

import { Icon } from '../../Icon';
import { Typography } from '../../Typography';

const Attachment = ({ value }) => (
	<Stack direction="row" alignItems="center" gap="12px">
		{value && <Icon iconName="Image" color={'P-50'} />}
		<Typography>{value}</Typography>
	</Stack>
);

export default Attachment;
