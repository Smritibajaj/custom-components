import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import BaseChip from './BaseChip';

export default {
	args: {
		label: 'Chip',
		onDelete: () => {
			// eslint-disable-next-line no-console
			console.log('clicked');
		},
	},
	component: BaseChip,
	title: 'Components/Chips',
} as ComponentMeta<typeof BaseChip>;

const Template: ComponentStory<typeof BaseChip> = args => (
	<BaseChip {...args} />
);

export const BaseChipExample = Template.bind({});
BaseChipExample.args = {};
