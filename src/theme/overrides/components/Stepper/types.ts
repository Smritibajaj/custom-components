import type { StepLabelProps, StepProps } from '@mui/material';
import type { StepperProps } from '@mui/material/Stepper/Stepper';

type ArrayTwoOrMore<T> = [T, T, ...T[]];
type Variant = 'primary' | 'secondary';

export interface CustomStepperProps
	extends Omit<StepperProps, 'variant' | 'elevation' | 'square'> {
	/**
	 * steps to show
	 *
	 * step object
	 *  - id: unique string
	 *  - label: Label to show
	 *  - subtext: description or information about step
	 *  - skipped: boolean to indicate skipped step (only when completed)
	 *  - stepProps: same as Mui StepProps
	 *  - labelProps: same as Mui StepLabelProps
	 */
	steps: ArrayTwoOrMore<{
		id: string | number;
		label: string;
		subtext?: string;
		stepProps?: StepProps;
		labelProps?: StepLabelProps;
	}>;
	/**
	 * error step indices
	 */
	errorSteps?: Array<number>;
	/**
	 * Variant of stepper to show
	 */
	variant: Variant;
	/**
	 * onChange function, if passed, steps are clickable
	 * passes step index on change
	 */
	onChange?: (step: number) => void;
}
