import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from '../Typography';
import Tooltip from './Tooltip';

export default {
	args: {
		title: 'Tooltip content',
		children: <Typography>Tooltip</Typography>,
	},
	component: Tooltip,
	title: 'Components/Tooltip',
} as ComponentMeta<typeof Tooltip>;

export const withoutIcon: ComponentStory<typeof Tooltip> = args => (
	<Tooltip {...args} />
);

export const withIcon: ComponentStory<typeof Tooltip> = args => (
	<Tooltip {...args} />
);

withIcon.args = {
	iconName: 'Activity',
};

export const longTextWithIcon: ComponentStory<typeof Tooltip> = args => (
	<Tooltip {...args} />
);

longTextWithIcon.args = {
	iconName: 'Activity',
	title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
};

export const longText: ComponentStory<typeof Tooltip> = args => (
	<Tooltip {...args} />
);

longText.args = {
	title: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
};
