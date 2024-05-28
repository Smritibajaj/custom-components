import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import React, { forwardRef, memo, useState } from 'react';

import { Icon } from '../Icon';
import type { TextFieldProps } from './types';

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
	({ type, ...rest }, ref) => {
		const [showPassword, setShowPassword] = useState(false);
		return (
			<MuiTextField
				{...rest}
				ref={ref}
				inputProps={{ ...rest.inputProps }}
				InputProps={{
					...rest.InputProps,
					...(type === 'password'
						? {
								endAdornment: (
									<InputAdornment position="end">
										<Icon
											iconName={
												showPassword
													? 'EyeSlash'
													: 'Eye'
											}
											onClick={() =>
												setShowPassword(prev => !prev)
											}
										/>
									</InputAdornment>
								),
						  }
						: {}),
				}}
				type={
					type === 'password'
						? showPassword
							? 'text'
							: 'password'
						: type
				}
			/>
		);
	}
);

TextField.displayName = 'TextField';

export default memo(TextField);
