import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import Stepper from './Stepper';

export default {
	args: {
		variant: 'primary',
		steps: [
			{ id: 1, label: 'Step 1', subtext: 'This is Step 1' },
			{ id: 2, label: 'Step 2', subtext: 'This is Step 2' },
			{ id: 3, label: 'Step 3', subtext: 'This is Step 3' },
			{ id: 4, label: 'Step 4', subtext: 'This is Step 4' },
		],
		activeStep: 1,
	},
	component: Stepper,
	title: 'Components/Stepper',
} as ComponentMeta<typeof Stepper>;

const StepperTemplate: ComponentStory<typeof Stepper> = args => (
	<Stepper {...args} />
);

export const Primary = StepperTemplate.bind({});
Primary.args = {};

export const PrimaryVertical = StepperTemplate.bind({});
PrimaryVertical.args = { orientation: 'vertical' };

export const Secondary = StepperTemplate.bind({});
Secondary.args = {
	variant: 'secondary',
};

export const SecondaryVertical = StepperTemplate.bind({});
SecondaryVertical.args = {
	variant: 'secondary',
	orientation: 'vertical',
};

export const StepErrorState = StepperTemplate.bind({});
StepErrorState.args = {
	errorSteps: [0, 2],
};

export const WithoutSubtext = StepperTemplate.bind({});
WithoutSubtext.args = {
	steps: [
		{ id: 1, label: 'Step 1' },
		{ id: 2, label: 'Step 2' },
		{ id: 3, label: 'Step 3' },
		{ id: 4, label: 'Step 4' },
	],
};

export const VerticalWithoutSubtext = StepperTemplate.bind({});
VerticalWithoutSubtext.args = {
	steps: [
		{ id: 1, label: 'Step 1' },
		{ id: 2, label: 'Step 2' },
		{ id: 3, label: 'Step 3' },
		{ id: 4, label: 'Step 4' },
	],
	orientation: 'vertical',
};

// clickable stepper example
const ClickableStepperTemplate: ComponentStory<typeof Stepper> = args => {
	const [activeStep, setActiveStep] = useState(0);
	return (
		<Stepper
			{...args}
			activeStep={activeStep}
			onChange={step => {
				setActiveStep(step);
			}}
		/>
	);
};
export const ClickableStepper = ClickableStepperTemplate.bind({});
ClickableStepper.args = {};
