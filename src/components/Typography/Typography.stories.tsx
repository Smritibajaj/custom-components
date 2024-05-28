import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TypographyVariants } from '../../theme/overrides/Typography';
import Typography from './Typography';

export default {
	args: {
		children: `I'm Typography text. Change my variant  type to update me!`,
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			defaultValue: TypographyVariants[0],
			description: 'variant of typography',
			options: TypographyVariants,
			table: {
				defaultValue: {
					summary: TypographyVariants[0],
				},
				type: {
					summary: TypographyVariants.join(' | '),
				},
			},
		},
	},
	component: Typography,
	parameters: {
		controls: {
			include: ['children', 'variant'],
		},
	},
	title: 'Components/Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
	<Typography {...args} />
);

export const TestTypography = Template.bind({});
TestTypography.args = {};
