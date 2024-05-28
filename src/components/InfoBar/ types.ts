import type { AlertProps as MuiAlertProps } from '@mui/material';

import type { IconName } from '../Icon';

export type InfoBarProps = Omit<MuiAlertProps, 'variant'> & {
	/**
	 * Highlighted Text after icon.
	 */
	title: string;
	/**
	 * Makes the InfoBar collapsable.
	 * @defalt false
	 */
	canClose?: boolean;
	/**
	 * Descripion or the body of message.
	 */
	description: string | string[];
	/**
	 * Start Icon Name to render with message
	 * @default null
	 */
	icon?: IconName;
};
