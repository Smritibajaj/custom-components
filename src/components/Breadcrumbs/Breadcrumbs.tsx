import { Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { createElement, memo } from 'react';

import type { BreadcrumbsProps } from './types';

const Breadcrumbs = ({
	breadcrumbs = [],
	onChange,
	activeBreadcrumb,
	variant = 'primary',
	...props
}: BreadcrumbsProps) => {
	// handle change
	const handleChange = ((event, breadcrumb) => {
		onChange?.(event, breadcrumb);
	}) as BreadcrumbsProps['onChange'];

	return (
		<>
			<MuiBreadcrumbs {...props} variant={variant}>
				{breadcrumbs.map(
					({
						id,
						component = 'div',
						label,
						componentProps,
						...rest
					}) =>
						createElement(
							component,
							{
								key: id,
								// @ts-expect-error
								onClick: (event: unknown) =>
									handleChange(event, { id, label, ...rest }),
								...componentProps,
							},
							label
						)
				)}
				{variant === 'primary' && (
					<Typography variant="headingMedium" color="D-80">
						{activeBreadcrumb?.label}
					</Typography>
				)}
			</MuiBreadcrumbs>
			{variant === 'secondary' && (
				<Typography variant="headingMedium" color="D-80">
					{activeBreadcrumb?.label}
				</Typography>
			)}
		</>
	);
};

export default memo(Breadcrumbs);
