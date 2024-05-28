import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Checkbox from './Checkbox';

export default {
	args: {
		disabled: false,
	},
	component: Checkbox,
	title: 'Components/Checkbox/WithNoLabel',
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
	<Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	indeterminate: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {};
