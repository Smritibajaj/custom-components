import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from '../Icon';
import Button from './Button';

export default {
	args: {
		size: 'medium',
		children: 'Button text',
		color: 'P-50',
		disabled: false,
		disableElevation: true,
		fullWidth: false,
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
	component: Button,
	title: 'Components/Button',
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = args => (
	<Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
	variant: 'secondary',
};

export const Tertiary = ButtonTemplate.bind({});
Tertiary.args = {
	variant: 'tertiary',
};

export const Ghost = ButtonTemplate.bind({});
Ghost.args = {
	variant: 'ghost',
};

export const WithStartIcon = ButtonTemplate.bind({});
WithStartIcon.args = {
	startIcon: <Icon iconName="AddressBook" />,
};

export const WithEndIcon = ButtonTemplate.bind({});
WithEndIcon.args = {
	endIcon: <Icon iconName="AddressBook" />,
};
