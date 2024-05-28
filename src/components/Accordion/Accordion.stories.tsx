import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import Accordion from './Accordion';

export default {
	args: {},
	component: Accordion,
	title: 'Components/Accordion',
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
	<Accordion {...args} />
);

export const WithTile = Template.bind({});
WithTile.args = {
	children: [
		<Accordion.Summary key="title" title="Accordion Title" />,

		<Accordion.Details key="details">
			<Typography>Accordion Detail line 1</Typography>
			<Typography>Accordion Detail line 2</Typography>
		</Accordion.Details>,
	],
};

export const SquareWithTile = Template.bind({});
SquareWithTile.args = {
	children: [
		<Accordion.Summary key="title" title="Accordion Title" />,

		<Accordion.Details key="details">
			<Typography>Accordion Detail line 1</Typography>
			<Typography>Accordion Detail line 2</Typography>
		</Accordion.Details>,
	],
	square: true,
};

export const WithTileAndSubtitle = Template.bind({});
WithTileAndSubtitle.args = {
	children: [
		<Accordion.Summary
			key="title"
			title="Accordion Title"
			subTitle="Accordion Subtitle"
		/>,

		<Accordion.Details key="details">
			<Typography>Accordion Detail line 1</Typography>
			<Typography>Accordion Detail line 2</Typography>
		</Accordion.Details>,
	],
};

export const With2ActionButtons = Template.bind({});
With2ActionButtons.args = {
	children: [
		<Accordion.Summary
			key="title"
			title="Accordion Title"
			subTitle="Accordion Subtitle"
		/>,

		<Accordion.Details key="details">
			<Typography>Accordion Detail</Typography>
		</Accordion.Details>,

		<Accordion.Actions key="actions">
			<Button size="small" variant="secondary">
				Cancel
			</Button>

			<Button size="small">Button</Button>
		</Accordion.Actions>,
	],
};

export const With1ActionButtons = Template.bind({});
With1ActionButtons.args = {
	children: [
		<Accordion.Summary
			key="title"
			title="Accordion Title"
			subTitle="Accordion Subtitle"
		/>,

		<Accordion.Details key="details">
			<Typography>Accordion Detail</Typography>
		</Accordion.Details>,

		<Accordion.Actions key="actions">
			<Button size="small">Button</Button>
		</Accordion.Actions>,
	],
};
