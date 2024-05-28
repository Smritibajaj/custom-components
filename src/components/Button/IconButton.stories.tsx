import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import IconButton from './IconButton';

export default {
	args: {
		color: 'P-50',
		disabled: false,
		disableElevation: true,
		fullWidth: false,
		iconName: 'AddressBook',
		icon: <Icon iconName="AddressBook" />,
		size: 'medium',
		variant: 'primary',
	},
	argTypes: {
		size: {
			control: { type: 'inline-radio' },
		},
		variant: {
			control: { type: 'inline-radio' },
		},
	},
	component: IconButton,
	title: 'Components/IconButton',
} as ComponentMeta<typeof IconButton>;

const IconButtonTemplate: ComponentStory<typeof IconButton> = args => (
	<IconButton {...args} />
);

export const IconButtonPrimary = IconButtonTemplate.bind({});
IconButtonPrimary.args = {};

export const IconButtonSecondary = IconButtonTemplate.bind({});
IconButtonSecondary.args = {
	variant: 'secondary',
};

export const IconButtonTertiary = IconButtonTemplate.bind({});
IconButtonTertiary.args = {
	variant: 'tertiary',
};

export const IconButtonGhost = IconButtonTemplate.bind({});
IconButtonGhost.args = {
	variant: 'ghost',
};
