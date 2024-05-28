import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '../Button';
import SimpleSnackbar from './Snackbar';

export default {
	args: {
		variant: 'light',
		message: 'Simple Snackbar',
	},
	component: SimpleSnackbar,
	title: 'Components/Snackbar',
} as ComponentMeta<typeof SimpleSnackbar>;

const Template: ComponentStory<typeof SimpleSnackbar> = args => {
	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button onClick={handleClick}>Open simple snackbar</Button>
			<SimpleSnackbar
				{...args}
				onClose={handleClose}
				open={open}
				autoHideDuration={6000}
			/>
		</>
	);
};

export const Snackbar = Template.bind({});

export const SnackbarWithStartIcon = Template.bind({});
SnackbarWithStartIcon.args = {
	startIconName: 'Command',
};

export const SnackbarWithActionButtons = Template.bind({});
SnackbarWithActionButtons.args = {
	action: [
		<Button
			variant="ghost"
			size="small"
			disableRipple
			sx={{
				'&:hover': {
					backgroundColor: 'transparent',
				},
			}}
			key="button1"
		>
			Button
		</Button>,
		<Button
			disableElevation
			disableRipple
			size="small"
			sx={{
				backgroundColor: 'transparent',
				'&:hover': {
					backgroundColor: 'transparent',
				},
			}}
			variant="secondary"
			key="button2"
		>
			Button
		</Button>,
	],
};
