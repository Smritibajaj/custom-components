import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import type { createElement } from 'react';

type TBreadcrumbsVariant = 'primary' | 'secondary';
interface IBreadcrumb {
	/**
	 * provide unique id
	 */
	id: number | string;
	/**
	 * label to show
	 */
	label: string;
	/**
	 * custom component if need
	 */
	component?: Parameters<typeof createElement>[0];
	// TODO: get componentProps based on component
	/**
	 * custom component's props if used
	 */
	componentProps?: Record<string, unknown>;
	/**
	 * other data can be passed, those will be provided with onChange
	 */
	[key: string]: unknown;
}

export type BreadcrumbsProps = Omit<MuiBreadcrumbsProps, 'expandText'> & {
	/**
	 * Active breadcrumb object {id, label}
	 */
	activeBreadcrumb: Pick<IBreadcrumb, 'id' | 'label'>;
	/**
	 * Array of breadcrumbs objects (except the active one)
	 *
	 * breadcrumb object:
	 * - id: unique id
	 * - label: label to show
	 * - component: custom component to override
	 * - componentProps: custom component's props
	 * - ... other data can be passed, those will be provided with onChange
	 */
	breadcrumbs: IBreadcrumb[];
	/**
	 * Variant of the breadcrumbs to use
	 */
	variant: TBreadcrumbsVariant;
	/**
	 * onChange function, it will provide breadcrumb object as 2nd argument
	 */
	onChange: (
		event: unknown,
		breadcrumb: BreadcrumbsProps['breadcrumbs'][0]
	) => void;
};
