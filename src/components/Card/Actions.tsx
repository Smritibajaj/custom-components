import CardActions from '@mui/material/CardActions';
import React, { memo } from 'react';

import type { ActionsProps } from './types';

const Actions = ({ children, ...restProps }: ActionsProps) => (
	<CardActions {...restProps}>{children}</CardActions>
);

export default memo(Actions);
