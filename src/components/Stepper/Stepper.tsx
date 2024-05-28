import { type StepIconProps, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { default as MuiStepper } from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { CheckCircle, XCircle } from 'phosphor-react';
import { memo } from 'react';

import type { CustomStepperProps } from '../../theme/overrides/components/Stepper/types';

const StepIcon = (props: StepIconProps) => {
	if (props.error && !props.active) {
		return <XCircle weight="bold" size={16} />;
	} else if (props.completed) {
		return <CheckCircle weight="bold" size={16} />;
	}

	return <Typography>{props.icon}</Typography>;
};

const Stepper = ({
	steps,
	activeStep,
	errorSteps,
	onChange,
	...restProps
}: CustomStepperProps) => {
	const handleChange = (index: number) => {
		if (index !== activeStep && onChange) {
			onChange(index);
		}
	};
	return (
		<Box sx={{ width: '100%' }}>
			{/* @ts-expect-error */}
			<StyledMuiStepper
				activeStep={activeStep}
				{...restProps}
				data-clickable={!!onChange}
			>
				{steps.map(
					(
						{ id, subtext, label, stepProps, labelProps },
						stepIndex
					) => (
						<Step
							key={id}
							{...stepProps}
							onClick={(...args) => {
								handleChange(stepIndex);
								stepProps?.onClick?.(...args);
							}}
						>
							<StepLabel
								StepIconComponent={StepIcon}
								optional={subtext}
								error={errorSteps?.includes(stepIndex)}
								{...labelProps}
							>
								{label}
							</StepLabel>
						</Step>
					)
				)}
			</StyledMuiStepper>
		</Box>
	);
};

const StyledMuiStepper = styled(MuiStepper)(() => ({
	'&[data-clickable="true"]': {
		'.MuiStepLabel-root': {
			cursor: 'pointer !important',
		},
	},
}));

export default memo(Stepper);
