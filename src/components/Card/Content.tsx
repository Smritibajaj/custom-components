import CardContent from '@mui/material/CardContent';
import React, { forwardRef, memo } from 'react';

import type { ContentProps } from './types';

const Content = forwardRef<HTMLDivElement, ContentProps>(
	({ children, ...restProps }, ref) => (
		<CardContent {...restProps} ref={ref}>
			{children}
		</CardContent>
	)
);

Content.displayName = 'Content';

export default memo(Content);
