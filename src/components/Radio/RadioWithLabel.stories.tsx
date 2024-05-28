import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import RadioWithLabel from './RadioWithLabel';

export default {
	args: {
		disabled: false,
		label: 'radio button label',
	},
	component: RadioWithLabel,
	title: 'Components/Radio/WithLabel',
} as ComponentMeta<typeof RadioWithLabel>;

const Template: ComponentStory<typeof RadioWithLabel> = args => (
	<RadioWithLabel {...args} />
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

export const Unchecked = Template.bind({});
Unchecked.args = {};

export const UncheckedOutlined = Template.bind({});
UncheckedOutlined.args = {
	variant: 'outlined',
};
