import type { ComponentMeta, ComponentStory } from '@storybook/react';

import InfoBar from './InfoBar';
import { PencilSimpleLine } from 'phosphor-react';

export default {
	args: {
		description: 'This is the main body of the infobar',
		title: 'Title',
		canClose: true,
	},
} as ComponentMeta<typeof InfoBar>;

const InfoBarTemplate: ComponentStory<typeof InfoBar> = args => (
	<InfoBar {...args} />
);

// 'success' | 'info' | 'warning' | 'error';

export const Info = InfoBarTemplate.bind({});
Info.args = {
	severity: 'info',
};

export const Success = InfoBarTemplate.bind({});
Success.args = {
	severity: 'success',
};

export const Warning = InfoBarTemplate.bind({});
Warning.args = {
	severity: 'warning',
};

export const Error = InfoBarTemplate.bind({});
Error.args = {
	severity: 'error',
	description: [
		'Pan card numbers doesn’t match.',
		'Third error if found comes here. error if found comes here error if found comes here error if found comes here.',
	],
};

export const Icon = InfoBarTemplate.bind({});
Icon.args = {
	severity: 'info',
	icon: <PencilSimpleLine size={24} />,
};
