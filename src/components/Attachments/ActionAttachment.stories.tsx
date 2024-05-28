import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ActionAttachment from './ActionAttachment';

export default {
	args: {
		size: 'medium',
		title: 'ACTION-1',
		priority: 'low',
		description:
			'During a project build, it is necessary to evaluate the product design and the develeopment',
		meta: {
			dueDate: { value: '22 Nov' },
			assignedBy: {
				name: 'Roshan Jha',
				img: 'https://s3.leena.ai/chatteron.io/public/public/assurant/629ef0eb43346ab1520d8127/Individual%20Effective-Cyber%20Security-iStock-1142469134.jpg',
			},
			status: { value: 'In Progress' },
		},
		onRemove: (...onRemoveArgs) => {
			console.log('clicked remove -->', onRemoveArgs);
		},
	},
	argTypes: {
		priority: {
			control: { type: 'radio', options: ['low', 'medium', 'high'] },
		},
		size: { control: { type: 'radio', options: ['small', 'medium'] } },
	},
	component: ActionAttachment,
	title: 'Components/Attachments/ActionAttachment',
} as ComponentMeta<typeof ActionAttachment>;

const ActionAttachmentTemplate: ComponentStory<
	typeof ActionAttachment
> = args => <ActionAttachment {...args} />;

export const MediumSize = ActionAttachmentTemplate.bind({});
MediumSize.args = {};

export const SmallSize = ActionAttachmentTemplate.bind({});
SmallSize.args = { size: 'small' };

export const WithoutCrossIcon = ActionAttachmentTemplate.bind({});
WithoutCrossIcon.args = { onRemove: undefined };
