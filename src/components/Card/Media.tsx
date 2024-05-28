import CardMedia from '@mui/material/CardMedia';
import React, { memo } from 'react';

import type { MediaProps } from './types';

const Media = ({ children, ...restProps }: MediaProps) => (
	<CardMedia {...restProps}>{children}</CardMedia>
);

export default memo(Media);
