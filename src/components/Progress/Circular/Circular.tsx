import CircularProgress from '@mui/material/CircularProgress';
import React, { memo } from 'react';

import type { CircularProgressProps } from './types';

const Circular = (props: CircularProgressProps) => (
	<CircularProgress {...props} />
);

export default memo(Circular);
