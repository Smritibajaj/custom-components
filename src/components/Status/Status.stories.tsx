import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Status from './Status';
import { Type } from './type';

export default {
	args: {
		label: 'Filter Chip',
	},
	component: Status,
	title: 'Components/Status',
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => <Status {...args} />;

export const StatusWithStartAndDropdown = Template.bind({});
StatusWithStartAndDropdown.args = {
	label: 'Filter Chip',
	startIconConfig: {
		iconName: 'Clock',
	},
	type: Type.default,
	list: [
		{
			label: 'Option 1',
			value: 'option 1',
			onClick: (value, event) =>
				console.log('value of the item clicked :: ', {
					value,
					event,
				}),
		},
		{
			label: 'option 2',
			value: 'option 2',
			onClick: (value, event) =>
				console.log('value of the item clicked :: ', {
					value,
					event,
				}),
		},
	],
};
export const StatusWithDropdown = Template.bind({});
StatusWithDropdown.args = {
	label: 'Filter Chip',
	type: Type.success,
	list: [
		{
			label: 'Option 1',
			value: 'option 1',
			onClick: (value, event) =>
				console.log('value of the item clicked :: ', {
					value,
					event,
				}),
		},
		{
			label: 'option 2',
			value: 'option 2',
			onClick: (value, event) =>
				console.log('value of the item clicked :: ', {
					value,
					event,
				}),
		},
	],
};

export const StatusSimple = Template.bind({});
StatusSimple.args = {
	label: 'Status',
};

export const StatusWithStartIcon = Template.bind({});
StatusWithStartIcon.args = {
	label: 'Filter Chip',

	startIconConfig: {
		iconName: 'Clock',
	},
	type: Type.error,
};

export const StatusWithEndIcon = Template.bind({});
StatusWithEndIcon.args = {
	label: 'Filter Chip',
	endIconConfig: {
		iconName: 'Clock',
	},
	type: Type.warning,
};
