import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CheckboxGroup from './CheckboxGroup';

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
		selectAll: 'Select all',
		isMultiSelect: true,
	},
	component: CheckboxGroup,
	title: 'Components/Checkbox/Group',
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = args => (
	<CheckboxGroup {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
	variant: 'outlined',
};

export const Simple = Template.bind({});
Simple.args = {};
