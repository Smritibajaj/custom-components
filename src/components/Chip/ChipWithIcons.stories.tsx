import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FilterChip from './ChipWithIcons';
import { CustomVariant } from './type';

export default {
	args: {
		isSelected: true,
		label: 'Filter Chip',
		endIconConfig: {
			iconName: 'Activity',
		},
		backgroundColor: 'G-10',
		borderColor: 'G-50',
		contentColor: 'G-50',
		onDelete: () => {
			console.log('clicked filter chip');
		},
		customVariant: CustomVariant.outlined,
	},
	component: FilterChip,
	title: 'Components/Chips',
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = args => (
	<FilterChip {...args} />
);

export const FilterChipExample = Template.bind({});
FilterChipExample.args = {};
