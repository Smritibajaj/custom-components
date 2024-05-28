import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Circular from './Circular';

export default {
	args: {
		color: 'P-50',
		size: 40,
	},
	component: Circular,
	title: 'Components/Progress',
} as ComponentMeta<typeof Circular>;

const Template: ComponentStory<typeof Circular> = args => (
	<Circular {...args} />
);

export const CircularProgress = Template.bind({});
