import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SwitchWithLabel from './SwitchWithLabel';

export default {
	args: {
		disabled: false,
		label: 'switch button label',
	},
	component: SwitchWithLabel,
	title: 'Components/Switch/WithLabel',
} as ComponentMeta<typeof SwitchWithLabel>;

const Template: ComponentStory<typeof SwitchWithLabel> = args => (
	<SwitchWithLabel {...args} />
);

export const Off = Template.bind({});
Off.args = {};

export const On = Template.bind({});
On.args = {
	checked: true,
};
