import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Switch from './Switch';

export default {
	args: {
		disabled: false,
	},
	component: Switch,
	title: 'Components/Switch/WithNoLabel',
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Off = Template.bind({});
Off.args = {};

export const On = Template.bind({});
On.args = {
	checked: true,
};
