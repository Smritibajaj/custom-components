import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AsyncSelect } from './AsyncSelect';
import { loadOptions } from './loadOptions';

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
	component: AsyncSelect,
	title: 'Components/AsyncSelect',
} as ComponentMeta<typeof AsyncSelect>;

export const Template: ComponentStory<typeof AsyncSelect> = args => (
	<AsyncSelect {...args} />
);

Template.args = {
	loadOptions: loadOptions,
};
