import type { GroupBase, Props, StylesConfig } from 'react-select';
import type { AsyncPaginateProps } from 'react-select-async-paginate';

export type Option = {
	label: string;
	value: unknown;
	isDisabled?: boolean;
};

export type SelectProps = Props<Option> & {
	label: string;
	required?: boolean;
	customStyles?: StylesConfig<Option>;
	// eslint-disable-next-line no-unused-vars
	onClear?: (ev: unknown) => void;
	error?: boolean;
	helperText?: string;
};

export type AdditionalAsyncProps = {
	limit: number;
	page: number;
	getOptionsURL?: string;
};

export type AsyncSelectProps = AsyncPaginateProps<
	Option,
	GroupBase<Option>,
	AdditionalAsyncProps,
	boolean
> & {
	label: string;
	required?: boolean;
	customStyles?: StylesConfig<Option>;
	error?: boolean;
	helperText?: string;
};
