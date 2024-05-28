import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';

export default {
	args: {
		disabled: false,
		label: 'checkbox button label',
	},
	component: CheckboxWithLabel,
	title: 'Components/Checkbox/WithLabel',
} as ComponentMeta<typeof CheckboxWithLabel>;

const Template: ComponentStory<typeof CheckboxWithLabel> = args => (
	<CheckboxWithLabel {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};

export const CheckedOutlined = Template.bind({});
CheckedOutlined.args = {
	checked: true,
	variant: 'outlined',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	indeterminate: true,
};

export const IndeterminateOutlined = Template.bind({});
IndeterminateOutlined.args = {
	indeterminate: true,
	variant: 'outlined',
};

export const Unchecked = Template.bind({});
Unchecked.args = {};

export const UncheckedOutlined = Template.bind({});
UncheckedOutlined.args = {
	variant: 'outlined',
};
