import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CodeEditor } from './';

export default {
	args: {
		error: false,
		name: 'declaration1665109973166',
		label: 'Declaration',
		disabled: false,
		value: '{"key": "value"}',
		required: true,
		helperText: 'required field',
		height: '400',
		language: 'json',
		showPrettify: true,
		showFormatErrors: true,
		editorUrl:
			'https://staging-workflow-api.leena.ai/api/bot/5c25fe9530521e0027a14779/app/64993694034aafe369590374/workflow/64993694034aafe369590377/data-center',
	},
	component: CodeEditor,
	title: 'Components/CodeEditor',
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = args => (
	<CodeEditor {...args} />
);

export const Primary = Template.bind({});
