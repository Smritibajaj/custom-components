import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Select } from './Select';

export default {
	argTypes: {
		isClearable: {
			control: 'boolean',
			defaultValue: false,
			name: 'Clearable',
		},
		isDisabled: {
			control: 'boolean',
			defaultValue: false,
			name: 'Disabled',
		},
		isMulti: {
			control: 'boolean',
			defaultValue: false,
			name: 'Is multi select',
		},
		isSearchable: {
			control: 'boolean',
			defaultValue: true,
			name: 'Searchable',
		},
		label: {
			control: 'text',
			defaultValue: 'Field Label',
			name: 'Label',
		},
		placeholder: {
			control: 'text',
			defaultValue: 'Placeholder',
			name: 'Placeholder',
		},
		required: {
			control: 'boolean',
			defaultValue: true,
			name: 'Required',
		},
	},
	component: Select,
	title: 'Components/Select',
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = args => (
	<Select {...args} />
);

Template.args = {
	options: Array.from({ length: 5 }).map((_, idx) => ({
		label: `Option ${idx + 1}`,
		value: `option ${idx + 1}`,
	})),
};
