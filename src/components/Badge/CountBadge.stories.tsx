import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CountBadge from './CountBadge';

export default {
	args: {
		type: 'neutral',
	},
	component: CountBadge,
	title: 'Components/Badges/CountBadge',
} as ComponentMeta<typeof CountBadge>;

const Template: ComponentStory<typeof CountBadge> = args => (
	<CountBadge {...args} />
);

export const CountBadgeDot = Template.bind({});
CountBadgeDot.args = {};

export const CountBadgeWithNumber = Template.bind({});
CountBadgeWithNumber.args = {
	value: 0.7,
};
