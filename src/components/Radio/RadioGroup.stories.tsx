import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import RadioGroup from './RadioGroup';

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
	component: RadioGroup,
	title: 'Components/Radio/Group',
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = args => (
	<RadioGroup {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
	variant: 'outlined',
};

export const Simple = Template.bind({});
Simple.args = {};
