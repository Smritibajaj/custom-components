import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SwitchGroup from './SwitchGroup';

export default {
	args: {
		disabled: false,
		error: false,
		label: 'Field label',
		options: [
			{ label: 'Male', value: 'male' },
			{ label: 'Female', value: 'female' },
			{ label: 'Other', value: 'value' },
		],
		required: false,
		row: true,
		variant: 'standard',
	},
	component: SwitchGroup,
	title: 'Components/Switch/Group',
} as ComponentMeta<typeof SwitchGroup>;

const Template: ComponentStory<typeof SwitchGroup> = args => (
	<SwitchGroup {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
	variant: 'outlined',
};

export const Simple = Template.bind({});
Simple.args = {};
