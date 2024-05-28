import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import BaseBadge from './BaseBadge';

export default {
	args: {
		sx: {
			backgroundColor: '#DDF7D5',
		},
		startIcon: {
			iconConfig: {
				iconName: 'CaretCircleDoubleUp',
				color: 'G-60',
				weight: 'bold',
				size: 12,
			},
		},
		endIcon: {
			iconConfig: {
				iconName: 'CaretCircleDoubleDown',
				color: 'G-60',
				weight: 'bold',
				size: 12,
			},
		},
		body: {
			component: '0.7',
			sx: {
				color: 'G-60',
				fontSize: 13,
			},
		},
	},
	component: BaseBadge,
	title: 'Components/Badges',
} as ComponentMeta<typeof BaseBadge>;

const Template: ComponentStory<typeof BaseBadge> = args => (
	<BaseBadge {...args} />
);

export const BaseBadgeExample = Template.bind({});
BaseBadgeExample.args = {};
