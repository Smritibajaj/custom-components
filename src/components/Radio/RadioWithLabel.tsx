import FormControlLabel from '@mui/material/FormControlLabel';
import React, { memo } from 'react';

import Radio from './Radio';
import type { RadioWithLabelProps } from './types';

const RadioWithLabel = (props: RadioWithLabelProps) => (
	<FormControlLabel {...props} control={<Radio />} />
);

export default memo(RadioWithLabel);
