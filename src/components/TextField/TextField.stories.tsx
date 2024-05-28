import InputAdornment from '@mui/material/InputAdornment';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import TextField from './TextField';

export default {
	args: {
		disabled: false,
		error: false,
		label: 'Field label',
		placeholder: 'Field placeholder',
		required: true,
		type: 'text',
	},
	component: TextField,
	title: 'Components/TextField',
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
	<TextField {...args} />
);

export const TextInput = Template.bind({});
TextInput.args = {};

export const NumberInput = Template.bind({});
NumberInput.args = {
	type: 'number',
};

export const NumberInputWithStartIcon = Template.bind({});
NumberInputWithStartIcon.args = {
	type: 'number',
	InputProps: {
		startAdornment: (
			<InputAdornment position="start">
				<Icon iconName="CurrencyDollar" />
			</InputAdornment>
		),
	},
};

export const NumberInputWithEndIcon = Template.bind({});
NumberInputWithEndIcon.args = {
	type: 'number',
	InputProps: {
		endAdornment: (
			<InputAdornment position="end">
				<Icon iconName="CurrencyDollar" />
			</InputAdornment>
		),
	},
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
	type: 'password',
};
