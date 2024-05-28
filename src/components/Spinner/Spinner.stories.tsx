import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Spinner from './Spinner';

export default {
	component: Spinner,
	title: 'Components/Spinner',
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const SmallSpinner = Template.bind({});
SmallSpinner.args = {
	size: 20,
};

export const MediumSpinner = Template.bind({});
MediumSpinner.args = {
	size: 40,
};

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
	size: 60,
};
