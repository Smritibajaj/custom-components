import MuiRating, { type RatingProps } from '@mui/material/Rating';
import React, { memo } from 'react';

import { Icon } from '../Icon';

const Rating = (props: RatingProps) => (
	<MuiRating
		{...props}
		emptyIcon={
			<Icon
				iconName="Star"
				size={28}
				weight="fill"
				disabled={props.readOnly}
			/>
		}
		icon={
			<Icon
				iconName="Star"
				size={28}
				weight="fill"
				disabled={props.readOnly}
			/>
		}
	/>
);

export default memo(Rating);
