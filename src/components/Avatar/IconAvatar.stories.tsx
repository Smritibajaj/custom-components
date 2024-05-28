import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconAvatar from './IconAvatar';

export default {
	args: {
		size: 40,
		color: 'P-50',
	},
	component: IconAvatar,
	title: 'Components/Avatar',
} as ComponentMeta<typeof IconAvatar>;

const Template: ComponentStory<typeof IconAvatar> = args => (
	<IconAvatar {...args} />
);

export const SimpleIconAvatar = Template.bind({});
SimpleIconAvatar.args = {
	iconName: 'Plus',
};
