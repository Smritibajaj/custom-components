import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Rating from './Rating';

export default {
	args: {
		value: 4,
	},
	component: Rating,
	title: 'Components/Rating',
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = args => {
	const [ratingValue, setRatingValue] = useState(args.value);

	return (
		<Rating
			{...args}
			value={ratingValue}
			onChange={(event, value) => setRatingValue(value)}
		/>
	);
};

export const SimpleRating = Template.bind({});

export const ReadOnlyRating = Template.bind({});
ReadOnlyRating.args = {
	readOnly: true,
};
