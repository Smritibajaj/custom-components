import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Declaration from './Declaration';

export default {
	args: {
		error: false,
		name: 'declaration1665109973166',
		label: 'Declaration',
		disabled: false,
		field: 'I, hereby authorize my current/prospective employer and/or any of its subsidiaries or affiliates or partners or vendors I, hereby authorize my current/prospective employer and/or any of its subsidiaries or affiliates or partners or vendors',
	},
	component: Declaration,
	title: 'Components/Declaration',
} as ComponentMeta<typeof Declaration>;

const Template: ComponentStory<typeof Declaration> = args => (
	<Declaration {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
	checked: true,
};
