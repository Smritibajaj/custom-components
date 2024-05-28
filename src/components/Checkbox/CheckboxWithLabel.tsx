import FormControlLabel from '@mui/material/FormControlLabel';
import React, { memo } from 'react';

import Checkbox from './Checkbox';
import type { CheckboxWithLabelProps } from './types';

const CheckboxWithLabel = ({
	indeterminate,
	...rest
}: CheckboxWithLabelProps) => (
	<FormControlLabel
		{...rest}
		control={<Checkbox indeterminate={indeterminate} />}
	/>
);

export default memo(CheckboxWithLabel);
