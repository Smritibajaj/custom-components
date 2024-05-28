import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TrendBadge from './TrendBadge';

export default {
	args: {
		value: 0.7,
		variant: 'withIcon',
		type: 'positive',
	},
	component: TrendBadge,
	title: 'Components/Badges',
} as ComponentMeta<typeof TrendBadge>;

const Template: ComponentStory<typeof TrendBadge> = args => (
	<TrendBadge {...args} />
);

export const TrendBadgeExample = Template.bind({});
TrendBadgeExample.args = {};
