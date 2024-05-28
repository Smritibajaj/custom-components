import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Divider from './Divider';

export default {
	args: {},
} as ComponentMeta<typeof Divider>;

const DividerTemplate: ComponentStory<typeof Divider> = args => (
	<Divider {...args} />
);

export const HorizontalDivider = DividerTemplate.bind({});
HorizontalDivider.args = {
	orientation: 'horizontal',
};

export const VerticalDivider = DividerTemplate.bind({});
VerticalDivider.args = {
	orientation: 'vertical',
	variant: 'middle',
};
