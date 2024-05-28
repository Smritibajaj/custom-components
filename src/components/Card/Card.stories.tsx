/* eslint-disable no-console */
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import Card from './Card';

export default {
	component: Card,
	title: 'Components/Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
	children: (
		<>
			<Card.Header
				title="Total bot users"
				subheader="Total number of unique users who are using the bot (signed up + interacted users)."
				action={[
					<Icon
						key="icon 1"
						iconName="ArrowsOutSimple"
						onClick={() => console.log('icon clicked 1')}
					/>,
					<Icon
						key="icon 1"
						iconName="DotsThreeVertical"
						onClick={() => console.log('icon clicked 2')}
						size={20}
					/>,
				]}
			/>
			<Card.Content>
				<Typography>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Aliquam praesentium, nihil magni veritatis laboriosam dolore
					voluptate ad libero odit ut! Architecto asperiores at
					dolorum minus rerum veniam! Amet, architecto. Officia!
				</Typography>
			</Card.Content>
		</>
	),
};

export const CardWithActions = Template.bind({});
CardWithActions.args = {
	children: (
		<>
			<Card.Header
				title="Total bot users"
				subheader="Total number of unique users who are using the bot (signed up + interacted users)."
				action={[
					<Icon
						key="icon 1"
						iconName="ArrowsOutSimple"
						onClick={() => console.log('icon clicked 1')}
					/>,
					<Icon
						key="icon 2"
						iconName="DotsThreeVertical"
						onClick={() => console.log('icon clicked 2')}
						size={20}
					/>,
				]}
			/>
			<Card.Content>
				<Typography>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Aliquam praesentium, nihil magni veritatis laboriosam dolore
					voluptate ad libero odit ut! Architecto asperiores at
					dolorum minus rerum veniam! Amet, architecto. Officia!
				</Typography>
			</Card.Content>
			<Card.Actions>
				<Button
					disableRipple
					endIcon={<Icon iconName="CaretRight" />}
					sx={{
						'&:hover': {
							background: 'none',
						},
						justifyContent: 'space-between',
					}}
					fullWidth
					variant="ghost"
				>
					Know more
				</Button>
			</Card.Actions>
		</>
	),
};
