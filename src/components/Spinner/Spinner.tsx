import React, { memo } from 'react';

import { Circular } from '../Progress';
import type { SpinnerProps } from './types';

const Spinner = ({ size = 40 }: SpinnerProps) => (
	<Circular color="P-50" size={size} />
);

export default memo(Spinner);
