import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Radio from './Radio';

export default {
	args: {
		disabled: false,
	},
	component: Radio,
	title: 'Components/Radio/WithNoLabel',
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {};
