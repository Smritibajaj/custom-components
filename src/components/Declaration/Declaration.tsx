import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import { memo } from 'react';

import { CheckboxWithLabel } from '../Checkbox';
import { DeclarationWrapper } from './styles';
import type { DeclarationProps } from './types';

const Declaration = (props: DeclarationProps) => {
	const {
		required = false,
		error = false,
		field = '',
		disabled = false,
		label,
		helperText,
		...rest
	} = props;

	return (
		<>
			<FormControl disabled={disabled} error={error} required={required}>
				<DeclarationWrapper error={error}>
					<CheckboxWithLabel
						{...rest}
						label={field}
						variant={'standard'}
					/>
				</DeclarationWrapper>
				{helperText ? (
					<FormHelperText error={!!error}>
						{helperText}
					</FormHelperText>
				) : null}
			</FormControl>
		</>
	);
};

export default memo(Declaration);
