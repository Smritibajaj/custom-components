import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Slider from './Slider';

export default {
	component: Slider,
	title: 'Components/Slider',
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />;

export const RangeSlider = Template.bind({});

export const WithLegend = Template.bind({});
WithLegend.args = {
	marks: [
		{ value: 0, label: '0%' },
		{ value: 100, label: '100%' },
	],
};

export const WithDataTip = Template.bind({});
WithDataTip.args = {
	valueLabelDisplay: 'auto',
};
