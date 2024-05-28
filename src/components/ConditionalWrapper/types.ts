/* eslint-disable no-unused-vars */
export type ConditionalWrapperProps = {
	condition: boolean;
	children: React.ReactElement;
	wrapper: (children: React.ReactElement) => React.ReactElement;
};
