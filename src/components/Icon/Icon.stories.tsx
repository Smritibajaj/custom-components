import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { theme } from '../../theme';
import Icon from './Icon';

export default {
	args: {
		disabled: false,
		iconName: 'Activity',
		mirrored: false,
		size: 16,
		weight: 'bold',
	},
	component: Icon,
	title: 'Components/Icon',
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {};

export const IconWithAction = Template.bind({});
IconWithAction.args = {
	onClick: action('icon clicked'),
};

export const IconWithColorAndHoverColor = Template.bind({});
IconWithColorAndHoverColor.args = {
	//Note: theme.palette color also works.
	color: 'G-50',
	hoverColor: 'Y-50',
	onClick: action('icon clicked'),
};

export const IconInFillMode = Template.bind({});
IconInFillMode.args = {
	weight: 'fill',
	fill: theme.palette['D-50'],
	onClick: action('icon clicked'),
};
