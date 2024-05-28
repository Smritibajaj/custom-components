import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Textarea from './Textarea';

export default {
	args: {
		disabled: false,
		error: false,
		label: 'Field Label',
		placeholder: 'placeholder',
		required: true,
	},

	component: Textarea,
	title: 'Components/Textarea',
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = args => (
	<Textarea {...args} />
);

export const Simple = Template.bind({});

export const WithCustomRows = Template.bind({});
WithCustomRows.args = {
	rows: 6,
};
