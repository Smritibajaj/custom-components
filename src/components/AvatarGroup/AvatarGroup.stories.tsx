import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AvatarGroup from './AvatarGroup';

export default {
	component: AvatarGroup,
	title: 'Components/AvatarGroup',
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = args => (
	<AvatarGroup {...args} />
);

export const twoStack = Template.bind({});
twoStack.args = {
	users: [
		{
			displayName: 'First Last',
		},
		{
			displayName: 'Avatar Image',
			img: 'https://picsum.photos/id/1025/367/267',
		},
	],
};

export const threeStack = Template.bind({});
threeStack.args = {
	users: [
		{
			displayName: 'First Last',
		},
		{
			displayName: 'Avatar Image',
			img: 'https://picsum.photos/id/1025/367/267',
		},
		{
			displayName: 'Ab Cd',
		},
	],
};

export const fourAndAboveStack = Template.bind({});
fourAndAboveStack.args = {
	users: [
		{
			displayName: 'First Last',
		},
		{
			displayName: 'Avatar Image',
			img: 'https://picsum.photos/id/1025/367/267',
		},
		{
			displayName: 'Ab Cd',
		},
		{
			displayName: 'First Name',
		},
		{
			displayName: 'Last Name',
		},
	],
};
