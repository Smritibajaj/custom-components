import MuiSnackbar from '@mui/material/Snackbar';
import React, { memo } from 'react';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import type { SnackbarProps } from './types';

const Snackbar = ({
	action,
	message,
	open,
	startIconName,
	shouldCloseOnClickaway,
	onClose,
	variant,
	...restProps
}: SnackbarProps) => {
	const handleClose: SnackbarProps['onClose'] = (evt, reason) => {
		if (reason === 'clickaway' && !shouldCloseOnClickaway) {
			return;
		} else {
			onClose?.(evt, reason);
		}
	};
	return (
		<MuiSnackbar
			open={open}
			onClose={handleClose}
			message={
				<>
					{startIconName && (
						<Icon
							iconName={startIconName}
							color={variant === 'light' ? 'black' : 'white'}
							hoverColor={variant === 'light' ? 'black' : 'white'}
						/>
					)}
					<Typography variant="descriptionMedium">
						{message}
					</Typography>
				</>
			}
			action={
				action ?? (
					<Icon
						color={variant === 'light' ? 'black' : 'white'}
						hoverColor={variant === 'light' ? 'black' : 'white'}
						iconName="X"
						onClick={e => handleClose(e, 'timeout')}
					/>
				)
			}
			variant={variant}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			{...restProps}
		/>
	);
};
export default memo(Snackbar);
