import '@mui/material/Stepper';

import type { CustomStepperProps } from './types';

declare module '@mui/material/Stepper' {
	interface StepperProps extends CustomStepperProps {}
}
