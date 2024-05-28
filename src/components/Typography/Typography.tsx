import MuiTypography from '@mui/material/Typography';
import React, { forwardRef, memo } from 'react';

import type { Props } from './types';

const Typography = forwardRef<HTMLSpanElement, Props>(
	({ children, ...restProps }, ref) => (
		<MuiTypography {...restProps} ref={ref}>
			{children}
		</MuiTypography>
	)
);

Typography.displayName = 'Typography';

export default memo(Typography);
